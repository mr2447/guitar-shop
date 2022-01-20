import React from 'react'

const Product = (props) => {
    const {product, onAdd } = props;

    return (
        <div>
            
            <div>
                <button onClick={()=> onAdd(product)}> Add to Cart </button>
            </div>
        </div>
    )
}

export default Product;