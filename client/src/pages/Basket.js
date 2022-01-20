import React from 'react'
import './style.css'
const Basket = (props) => {
const {cartItems, onAdd, onRemove} = props;
console.log("cartItems: ",cartItems)
const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
const totalPrice = itemsPrice
      return(
        <aside>
          <div>
            {cartItems.length === 0 && <div className='item_info' >Cart Is Empty</div>}
            {cartItems.map((item)=> (
              <div key={item.id} className='cart_item_info'>
                <div className='item_info'>{item.brand}</div>
                
                <div>
                  <button onClick={()=>onAdd(item)} >
                    +
                  </button>
                  <button onClick={()=>onRemove(item)} >
                    -
                  </button>
                </div>
                <div className='item_info'>
                  {item.qty} x ${item.price.toFixed(2)}
                </div>
                  
              </div>
            ))}
            {cartItems.length !== 0 && (
              <>
              <hr></hr>
              <div className='cart_total'>
                  <div>
                    Items Price
                  </div>
                  <div>{itemsPrice.toFixed(2)}</div>
              </div>

              <div className='cart_total'>
                  <div>
                    <strong>Total</strong>
                  </div>
                  <div>
                    {itemsPrice.toFixed(2)}
                  </div>
                </div>
              </>
            )}
          </div>
          <hr />
          <div>
            <button className='cart_checkout' onClick={()=> alert('Implement checkout')}>
              Checkout
            </button>
          </div>
        </aside>
    )

      
}



export default Basket