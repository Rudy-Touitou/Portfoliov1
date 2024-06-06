import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jkpthds', 'template_7yb33am', form.current, 'W0UtfUtL07CiZK6vX')
      .then((result) => {
          console.log(result.text)
          alert("Message envoyé ! 👍");
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
      
  };

  return (
    <section id='contact'>
      <h5 className='overlined'>Discutons Autour d'un café</h5>
      <h2>Me Contacter</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>touitou.rudy@gmail.com</h5>
            <a href="mailto:touitou.rudy@gmail.com" target='_blank' rel="noreferrer">Envoyer un Email</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Rudy Touitou</h5>
            <a href="https://m.me/1442761407" target='_blank' rel="noreferrer">Envoyer un Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+33650521529</h5>
            <a href="https://wa.me/+33650521529" target='_blank' rel="noreferrer">Envoyer un Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nom Complet' required />
          <input type="text" name='email' placeholder='Votre Email' required />
          <textarea name="message" rows="7" placeholder='Votre Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer un Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact