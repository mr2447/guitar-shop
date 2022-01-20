import React from 'react'

const HeaderBasket = (props) => {
const {countCartItems} = props;
      return(
        <header>
          <div>
          
          </div>
          <div>
            <a className='item_info' href="#/cart">
              Item(s) {' '}
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