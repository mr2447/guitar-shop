import React from 'react'
import './style.css'
function Contact(){
  return(
      <section className='contact_section'>
        <div className='contact_img'>
        <img src={`${process.env.PUBLIC_URL}/img/hero_img.jpeg`}  alt='cover' />
        </div>
        <div className='contact_form'>
          <form>
            <div className='input_boxx'>
              <label htmlFor='name'>Name</label>
              <input type={'text'} placeholder='Name'/>
            </div>
            <div className='input_boxx'>
              <label htmlFor='emial'>Email</label>
              <input type={'text'} placeholder='John.m@gmail.com'/>
            </div>
            <div className='input_boxx'>
              <label htmlFor='emial'>Message</label>
              <textarea rows={'5'} type={'text'} placeholder='message goes here...'/>
            </div>
          </form>
           <div className='btn_contact'>
             <button>Submit</button>
           </div>
        </div>

      </section>
  );

}

export default Contact;