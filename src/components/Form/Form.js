import './Form.scss';
import React from 'react';


const Form = ({ formState, handleChange, handleSubmit, disableSaveButton }) => {

  const autotab = (current, to) => {
    if (current && current.value.length == current.getAttribute('maxlength')) {
      to.focus()
    }
  }

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
          Phone:
        </label>
        <input className='form__input form__input--phone' type='tel' id='phone1' value={formState.phone1} onChange={handleChange} minLength={3} maxLength={3} required onInput={() => autotab(document.getElementById('phone1'), document.getElementById('phone2'))}/>
        <input className='form__input form__input--phone' type='tel' id='phone2' value={formState.phone2} onChange={handleChange} minLength={3} maxLength={3} required onInput={() => autotab(document.getElementById('phone2'), document.getElementById('phone3'))}/>
        <input className='form__input form__input--phone' type='tel' id='phone3' value={formState.phone3} onChange={handleChange} minLength={4} maxLength={4} required/>
      </div>

      <button className='form__submit' type='submit' disabled={disableSaveButton()}>
        Save
      </button>
    </form>
  );
}

export default Form;
