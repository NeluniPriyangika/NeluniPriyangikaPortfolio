import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'; 
import {RiMessengerLine} from 'react-icons/ri'; 
import {BsWhatsapp} from 'react-icons/bs'; 
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const from = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fcga8so', 'template_i6c08nv', from.current, 'xraEhD5j8snSIEICz')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contct Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>padnp123@gmail.com</h5>
            <a href="mailto:padnp123@gmail.com" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>
          <article className='contact_option' target={'_blank'} rel="noreferrer">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Neluni Priyangika</h5>
            <a href="https://m.me/neluni.priyangika">Send a message</a>
          </article>
          <article className='contact_option' target={'_blank'} rel="noreferrer">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+94776985441</h5>
            <a href="https://api.whatsapp.com/send?phone=+94776985441">Send a message</a>
          </article>
        </div>
        {/*END OF THE CONTACT OPTIONS*/}
        <form ref={from} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="massage" rows="7" placeholder='Your Massage'></textarea>
          <button type='submit' className='btn btn-primary'>Send Massege</button>
        </form>
      </div>
    </section>
  )
}

export default Contact