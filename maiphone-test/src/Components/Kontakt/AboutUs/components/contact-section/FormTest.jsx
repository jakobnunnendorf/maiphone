import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import { Icon } from '@iconify/react'
// import sendCircle from '@iconify/icons-mdi/send-circle'

import './form.css'

export const FormTest = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y25gdmr', 'template_46hgr4s', form.current, 'eTwfo3WVJ4RX6Rlz6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const submitMessage = () => {
    document.getElementById('formSubmitted').value='Teşekkürler!';
};

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <h2 className="form-h2">Schicken sie uns eine Nachricht</h2>

      <label className="form-label">
        Telefonnummer
        <input type="tel" name="user_phone" className="form-input" placeholder='+49 123 45678901'/>
      </label>

      <label className="form-label">
        Name
        <input type="text" name="user_name" className="form-input" placeholder='Vorname Nachname'/>
      </label>

      <label className="form-label">
        Email
        <input type="email" name="user_email" className="form-input" placeholder='email@beispiel.com'/>
      </label>

      <label className="form-label">
        Ihre Nachricht
        <textarea name="message" className="form-textarea" placeholder="Wie können wir Ihnen weiterhelfen?"/>
      </label>

      <input type="submit" value="Senden" className="form-submit" id="formSubmitted" onClick={submitMessage}/>
    </form>
  );
};