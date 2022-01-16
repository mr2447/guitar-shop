import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../../utils/mutations'
import { QUERY_PRODUCTS, QUERY_ME } from '../../utils/queries';
import EncodeBase64 from '../Image'

const ProductForm = () => {
    const [formState, setFormState] = useState({ brand: '', condition: '', price: ''});
    const [addProduct, { error }] = useMutation(ADD_PRODUCT, {
        update(cache, {data: { addProduct }}) {
          try {
            //could potentially not exist yet
            const { products } = cache.readQuery({ query: QUERY_PRODUCTS})
            cache.writeQuery({
              query: QUERY_PRODUCTS,
              data: { products: [addProduct, ...products]}
            });
          } catch (e) {
            console.error(e)
          }
  
          // update me object's cache, appending new thought to the end of the array
          const { me } = cache.readQuery({ query: QUERY_ME });
          cache.writeQuery({
            query: QUERY_ME,
            data: { me: { ...me, products: [...me.products, addProduct] } }
          });
        }
    });
    let name
    const handleChange = event => {
        const { name: value } = event.target;

        setFormState({
          ...formState, 
          [name]: value
        })
        
    };
    console.log(formState);

    //submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            //execute addUser mutation and pass in variable data from form
            const { data } = await addProduct({
                variables: { ...formState}
            });
            
            console.log(data)
    

        } catch (e) {
            console.error(e)
        }
    }


  
    return(
        <main>
        <div>
        <EncodeBase64 />
        <div>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Brand'
                name='brand'
                type='brand'
                id='brand'
                defaultValue={formState.brand}
                onChange={handleChange}
              ></input>
              <input
                className='form-input'
                placeholder='condition'
                name='condition'
                type='condition'
                id='condition'
                defaultValue={formState.condition}
                onChange={handleChange}
              ></input>
              <input
                
                className='form-input'
                placeholder='price'
                name='price'
                type='price'
                id='price'
                defaultValue= {formState.price}
                onChange={handleChange}
              ></input>
              <button type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Add Product failed</div>}
        </div>
            
        </div>
        </main>
    )
};

export default ProductForm
