import React from 'react';

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
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;