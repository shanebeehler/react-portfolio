import './Contact.scss';
import React from 'react';

const Contact = ({ formState, handleChange, handleSubmit, disableSendButton }) => {
  return (
    <form onSubmit={handleSubmit} className='form' name='form'>
      <div className='form__inputCol'>
        <label className='form__label'>
          Name:
        </label>
        <input className='form__input' type='text' id='name' value={formState.name} onChange={handleChange} required/>
      </div>

      <div className='form__inputCol'>
        <label className='form__label'>
          Email:
        </label>
        <input className='form__input' type='email' id='email' value={formState.email} onChange={handleChange} required/>
      </div>

      <div className='form__inputCol'>
        <label className='form__label'>
          Message:
        </label>
        <textarea className='form__input' type='text' id='message' value={formState.message} onChange={handleChange} required/>
      </div>

      <button className='form__submit' type='submit'>
        Send
      </button>
    </form>
  );
}

export default Contact;
