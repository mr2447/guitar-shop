import React, { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'
function Header(){
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    
    const [navSelected, setNavSelected]= useState(false);
    const handleResize = () => {
        if (window.innerWidth > 575) {
            setNavSelected(true)
        } else {
            setNavSelected(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
      })

  return(
      <section>
          <div className='nav'>
              <div className='t_brand'>
                    <h1><Link className='clear logo' to="/">Guitar Shop</Link></h1>
                    <div 
                    className='menu-img'
                    onClick={()=> setNavSelected(true)}
                     >
                        <img src={`${process.env.PUBLIC_URL}/img/menu-icon.jpg`} alt='menu'/> 
                    </div>
              </div>
             {navSelected && <div className='navigate'>
                    <div 
                    className='exit-btn'
                    onClick={()=> setNavSelected(false)}
                        >
                        <img 
                        src={`${process.env.PUBLIC_URL}/img/exit.svg`} alt='menu'/>
                    </div>
                  <ul>
                      <li><Link 
                      className='clear'  
                      to="/shop"
                      onClick={()=> setNavSelected(false)}
                      >Shop</Link></li>
                      <li><Link 
                      className='clear' 
                      to="/about"
                      onClick={()=> setNavSelected(false)}
                      >About</Link></li>
                      <li><Link 
                      className='clear' 
                      to="/contact"
                      onClick={()=> setNavSelected(false)}
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
                         onClick={()=> setNavSelected(false)}>Login</Link>
                          
                          <Link 
                          className='divide' 
                          to="/signup"
                          onClick={()=> setNavSelected(false)}>Signup</Link>
                         </li>
                          
                      )}
                    </ul>
              </div>}
            

          </div>
      </section>
  );

}

export default Header;