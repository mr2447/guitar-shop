import React from 'react'

const Basket = (props) => {
const {cartItems, onAdd, onRemove} = props;
console.log("cartItems: ",cartItems)
const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
const totalPrice = itemsPrice
      return(
        <aside>
          <h2>Cart Items</h2>
          <div>
            {cartItems.length === 0 && <div>Cart Is Empty</div>}
            {cartItems.map((item)=> (
              <div key={item.id}>
                <div>{item.brand}</div>
                <div>
                  <button onClick={()=>onAdd(item)} >
                    +
                  </button>
                  <button onClick={()=>onRemove(item)} >
                    -
                  </button>
                </div>
                <div>
                  {item.qty} x ${item.price.toFixed(2)}
                </div>
                  
              </div>
            ))}
            {cartItems.length !== 0 && (
              <>
              <hr></hr>
              <div>
                  <div>
                    Items Price
                  </div>
                  <div>{itemsPrice.toFixed(2)}</div>
              </div>

              <div>
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
            <button onClick={()=> alert('Implement checkout')}>
              Checkout
            </button>
          </div>
        </aside>
    )

      
}



export default Basket