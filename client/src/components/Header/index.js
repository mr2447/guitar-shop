import React from 'react'
import './style.css'
function Header(){
  return(
      <section>
          <div className='nav'>
              <div className='t_brand'>
                  <h1>Guitar Shop</h1>
              </div>
              <div className='navigate'>
                  <ul>
                      <li>Shop</li>
                      <li>About</li>
                      <li>Contact</li>
                  </ul>
              </div>

          </div>
      </section>
  );

}

export default Header;