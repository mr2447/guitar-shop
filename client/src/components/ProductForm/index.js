import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../../utils/mutations'
import { QUERY_PRODUCTS, QUERY_ME } from '../../utils/queries';
import EncodeBase64 from '../Image'

const ProductForm = () => {
    const [formState, setFormState] = useState({ brand: '', price: '', condition: ''});
    const { brand, price, condition } = formState;
    const [addProduct, { error }] = useMutation(ADD_PRODUCT)
    // ,{
    //     update(cache, {data: { addProduct }}) {
    //       try {
    //         //could potentially not exist yet
    //         const { products } = cache.readQuery({ query: QUERY_PRODUCTS})
    //         cache.writeQuery({
    //           query: QUERY_PRODUCTS,
    //           data: { products: [addProduct, ...products]}
    //         });
    //       } catch (e) {
    //         console.error(e)
    //       }
  
    //       // update me object's cache, appending new thought to the end of the array
    //       const { me } = cache.readQuery({ query: QUERY_ME });
    //       cache.writeQuery({
    //         query: QUERY_ME,
    //         data: { me: { ...me, products: [...me.products, addProduct] } }
    //       });
    //     }
    // });

    const handleChange = (e) => {

      setFormState({...formState, [e.target.name]: e.target.value})
         
    };
    console.log("input: ", formState);

    //submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
   
        // console.log("typeof price", typeof parseInt(formState.price))
        
        try {
          console.log("typeof brand",typeof formState.brand)
          const { data } = await addProduct({
            variables: {
              brand: formState.brand,
              price: parseInt(formState.price),
              condition: formState.condition
            }
          });

          console.log(data)
            //execute addProduct mutation and pass in variable data from form
            // const { data } = await addProduct({
            //     variables: { ...formState, brand}
            // });
            
            // console.log(data)
    

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
                placeholder='Brand'
                name='brand'
                type='text'
                defaultValue={brand}
                onChange={handleChange}
              ></input>
              <input              
                placeholder='price'
                name='price'
                type='price'
                defaultValue= {price}
                onChange={handleChange}
              ></input>
                <input
                placeholder='condition'
                name='condition'
                type='condition'
                defaultValue={condition}
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
