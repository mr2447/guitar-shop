import React from 'react'

const HeaderBasket = (props) => {
const {countCartItems} = props;
      return(
        <header>
          <div>
          <a href="#/">
            <h1>Small Shopping Cart </h1>
          </a>
          </div>
          <div>
            <a href="#/cart">
              Cart {' '}
              {countCartItems? (
                <button>{countCartItems}</button>
              ) : (
                ""
              )}
            </a>
          </div>
        </header>
    )

      
}



export default HeaderBasket