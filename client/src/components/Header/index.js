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
                    <h1><Link className='clear logo' to="/">Guitar Shop</Link></h1>
                    <div 
                    className='menu-img'
                    
                     >
                        <img src={`${process.env.PUBLIC_URL}/img/menu-icon.jpg`} alt='menu'/> 
                    </div>
              </div>
             <div className='navigate'>
                    <div 
                    className='exit-btn'
                    
                        >
                        <img 
                        src={`${process.env.PUBLIC_URL}/img/exit.svg`} alt='menu'/>
                    </div>
                  <ul>
                      <li><Link 
                      className='clear'  
                      to="/shop"
                      
                      >Shop</Link></li>
                      <li><Link 
                      className='clear' 
                      to="/about"
                      
                      >About</Link></li>
                      <li><Link 
                      className='clear' 
                      to="/contact"
                      
                      >Contact</Link></li>
                      {Auth.loggedIn() ? (
                          
                          
                          
                          <li> <Link 
                          className='divide' 
                          to="/" 
                          onClick={logout}>
                              Logout</Link>
                              <Link className='divide' to="/profile">Me</Link>
                          </li>
                          
                      ) : (
                          <li>
                         <Link 
                         className='divide' 
                         to="/login"
                         >Login</Link>
                          
                          <Link 
                          className='divide' 
                          to="/signup"
                          >Signup</Link>
                         </li>
                          
                      )}
                    </ul>
              </div>
            

          </div>
      </section>
  );

}

export default Header;