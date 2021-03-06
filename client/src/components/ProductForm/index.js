import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../../utils/mutations'
import { QUERY_PRODUCTS, QUERY_ME } from '../../utils/queries';
import ImageUpload from '../ImageUpload';
import './style.css'

const ProductForm = ({myImage}) => {
  //ADD IMAGE SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //({publicID: ""})
  const [publicId, setPublicId] = useState({publicID: ""})

  //ADD CATEGORY SECTION
  // const [category, setCategory] = useState({category: ""})
  //ADD PRODUCT SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [formState, setFormState] = useState({ brand: '', price: '', condition: '', color: ''});
    const { brand, price, condition, color } = formState;
    const [addProduct, { error }] = useMutation(ADD_PRODUCT,{
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

    const handleChange = (e) => {

      setFormState({...formState, [e.target.name]: e.target.value})
      setPublicId(myImage.publicID)
      console.log("publicId from productform: ", publicId)  
      // console.log("type of publicId from productform: ", typeof publicId)  
    };

    //submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const { data } = await addProduct({
            variables: {
              brand: formState.brand,
              price: parseInt(formState.price),
              condition: formState.condition,
              color: formState.color,
              publicID: publicId,
              
            }
          });

          console.log(data)
    

        } catch (e) {
            console.error(e)
        }
    }
  

  
    return(
        <main>
        <div>
        <div>
            <form className='input-form' onSubmit={handleFormSubmit}>
              <div className='row'>
              <input
                className='input-box'
                placeholder='Brand'
                name='brand'
                type='text'
                defaultValue={brand}
                onChange={handleChange}
              ></input>
              <input 
                className='input-box'             
                placeholder='price'
                name='price'
                type='price'
                defaultValue= {price}
                onChange={handleChange}
              ></input>
              </div>
              <div className='row'>
                <input
                className='input-box'
                placeholder='condition'
                name='condition'
                type='condition'
                defaultValue={condition}
                onChange={handleChange}
                ></input>
                <input
                className='color-input'
                placeholder='Optional: color'
                name='color'
                type='color'
                defaultValue={color}
                onChange={handleChange}
                ></input>
                </div>
                
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
