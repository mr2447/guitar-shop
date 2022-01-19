import React from 'react';
//link to a single product page?
// import { Link } from 'react-router-dom';
// import EncodeBase64 from '../Image'
import ImageUpload from '../ImageUpload';
import Guitar from '../Store'
import './style.css'

const ProductList = ({ products, title }) => {
  if (!products.length) {
    return <h3>No Products Yet</h3>;
  }
  console.log(products);

  return (
    
    <div className='guitarCard2'>
      
      {products &&
        products.map(product => (
          <div className='guitarCard'>
          
          <div key={product._id} style={{margin:'.5em'}}>
            <p className='brand'>
            {product.condition} 
               <strong> {product.brand}</strong> guitar.
            </p>
            <div>
             <p>Posted on{' '}{product.createdAt.split('at 12:40 am')}</p>
             <Guitar className='img' product={product}/>
            </div>
            <div className='itemEl'>
              <div>
                <p>${product.price}.99</p>
              </div>
              <div>
                <button>Add-to Cart</button>
              </div>
            </div>
          </div>
          </div>
        ))}
        
    </div>
   
  );
  
};

export default ProductList;