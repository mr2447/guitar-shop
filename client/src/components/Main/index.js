import React from 'react'
import './style.css'
function Main(){
  return(
      <section>
        <div className='container'>
          <div className='hero_txt'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          </div>
          <div className='hero_img'>
            <img src={`${process.env.PUBLIC_URL}/img/hero_img2.jpeg`}  alt='hero_img' />
          </div>

        </div>
      </section>
  );

}

export default Main;