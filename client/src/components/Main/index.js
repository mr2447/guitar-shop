import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
function Main(){
  return(
      <section>
        <div className='container'>
          <div className='hero_txt'>
            <p>A guitar is more than just a sound box… it is part of your soul. –Manuel Velazquez.</p>
          </div>
          <div className='hero_img'>
            <img src={`${process.env.PUBLIC_URL}/img/hero_img2.jpeg`}  alt='hero_img' />
            <p><Link className='main_btn'  to="/shop">Shop Now </Link></p>
          </div>

        </div>
      </section>
  );

}

export default Main;