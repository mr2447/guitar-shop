import React from 'react'
import './style.css'

function About(){
  return(
      <section className='about-sec'>
        
        <div className='contain'>
         <div className='about_txt'>
           <div className='about_title'>
             <h3>About us</h3>
            </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

         </div>
         <div className='about_img'>
           <img src={`${process.env.PUBLIC_URL}/img/guitarCover.jpeg`}  alt='cover' />
         </div>
        </div>
        <div className='contain2'>
         <div className='about_txt'>
         <div className='about_title'>
             <h3>Also...</h3>
            </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

         </div>
         <div className='about_img2'>
           <img src={`${process.env.PUBLIC_URL}/img/about_img3.jpeg`}  alt='cover' />
         </div>
        </div>


      </section>
  );

}

export default About;