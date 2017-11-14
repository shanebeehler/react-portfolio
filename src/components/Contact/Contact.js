import './Contact.scss';
import React from 'react';

const Contact = ({ formState, handleChange, handleSubmit, disableSendButton, render }) => {

  const renderFormOrMessage = () => {
    if (render === 'contact') {
      return (
        <form onSubmit={handleSubmit} className='contact' name='contact'>
          <div className='contact__inputCol'>
            <label className='contact__label'>
              Name:
            </label>
            <input className='contact__input' type='text' id='name' value={formState.name} onChange={handleChange} required/>
          </div>

          <div className='contact__inputCol'>
            <label className='contact__label'>
              Email:
            </label>
            <input className='contact__input' type='email' id='email' value={formState.email} onChange={handleChange} required/>
          </div>

          <div className='contact__inputCol contact__inputCol--textarea'>
            <label className='contact__label'>
              Message:
            </label>
            <textarea className='contact__input contact__input--textarea' type='text' id='message' value={formState.message} onChange={handleChange} required/>
          </div>

          <button className='contact__submit' type='submit' disableSendButton={disableSendButton}>
            Send
          </button>
        </form>
      );
    }
    else if (render === 'success') {
      return (
        <div className='message message--success'>
          Thank you. Your message was sent.
        </div>
      );
    }
    else if (render === 'error') {
      return (
        <div className='message message--fail'>
          Your message has failed to send. Please try again.
        </div>
      );
    }
  }

  return (
    <div className='contactPage__outer'>
      <div className={`contactPage contactPage--${render}`}>
        <div className={`contactPage__topRow contactPage__topRow--${render}`}>
          <h3 className='contactPage__header'>{render}</h3>
        </div>

        {renderFormOrMessage()}
      </div>
    </div>
  );
}

export default Contact;
