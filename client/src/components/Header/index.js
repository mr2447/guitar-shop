import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'
function Header(){
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
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
                      {Auth.loggedIn() ? (
                          
                          
                          
                          <li> <Link className='divide' to="/" onClick={logout}>
                              Logout</Link>
                              <Link className='divide' to="/profile">Me</Link>
                          </li>
                          
                      ) : (
                          <li>
                         <Link className='divide' to="/login">Login</Link>
                          
                          <Link className='divide' to="/signup">Signup</Link>
                         </li>
                          
                      )}
                    </ul>
              </div>
            

          </div>
      </section>
  );

}

export default Header;