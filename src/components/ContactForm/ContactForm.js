import emailjs from 'emailjs-com'
import React from 'react'
import './ContactForm.css'

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_dnv1bra',
        'template_yavedw8',
        e.target,
        'user_McaeHnh5Lt2gtRBQmxl6h'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <h2 id='contact' className='section__title'>
        Contact
      </h2>
      <div className='container'>
        <form onSubmit={sendEmail}>
          <div className='name'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
              required
            />
          </div>
          <div className='email'>
            <input
              type='email'
              className='form-control'
              placeholder='Email Address'
              name='email'
              required
            />
          </div>
          <div className='subject'>
            <input
              type='text'
              className='form-control'
              placeholder='Subject'
              name='subject'
              required
            />
          </div>
          <div className='message'>
            <textarea
              className='form-control'
              id=''
              cols='30'
              rows='8'
              placeholder='Your message'
              name='message'
              required
            />
          </div>
          <div className='submit'>
            <input type='submit' className='submit-btn' value='Send Message' />
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
