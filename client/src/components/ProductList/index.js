import React from 'react';
//link to a single product page?
import { Link } from 'react-router-dom';
// import EncodeBase64 from '../Image'
import CloudImage from '../ImageUpload'
import Guitar from '../Store'

const ProductList = ({ products, title }) => {
  if (!products.length) {
    return <h3>No Products Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {products &&
        products.map(product => (
          <div key={product._id}>
            <p>
              {product.username}{' '}is selling a {product.brand} guitar.
            </p>
            <div>
             <p>Uploaded on{' '}{product.createdAt}</p>
             <br/>
             <CloudImage />
             <Guitar product={product}/>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;