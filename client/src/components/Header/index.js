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
                  <Link to="/">
                    <h1>Guitar Shop</h1>
                  </Link>
              </div>
              <div className='navigate'>
                  <ul>
                      <li>Shop</li>
                      <li>About</li>
                      <li>Contact</li>
                      {Auth.loggedIn() ? (
                          <>
                          <Link to="/profile">Me</Link>
                          <a href="/" onClick={logout}>
                              Logout
                          </a>
                          </>
                      ) : (
                          <>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                          </>
                      )}
                    </ul>
              </div>
            

          </div>
      </section>
  );

}

export default Header;