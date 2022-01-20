import React, { useState } from 'react'
import ProductBasket from './ProductBasket'
const MainBasket = (props) => {
    const { products, onAdd } = props
   
    return (
        <main>
            <h2>
                Products
            </h2>
            <div>
                {products.map((product)=> (
                    <ProductBasket key={product.id} product={product} onAdd={onAdd}></ProductBasket>
                ))}
            </div>
        </main>
    )
}


export default MainBasket