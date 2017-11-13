import './DisplayEdit.scss';
import React         from 'react';
import FormContainer from '../../containers/FormContainer';
import Instructions  from '../Instructions/Instructions'

const DisplayEdit = ({ renderForm, editInfo, saveInfo, info }) => {

  const renderInfoOrForm = () => {
    if (renderForm) {
      return (
        <FormContainer info={info} saveInfo={saveInfo}/>
      );
    }
    return (
      <div className='infoBox__main'>
        <div className='infoBox__inputCol'>
          <label className='infoBox__label'>
            Name:
          </label>
          <span className='infoBox__info'>{info.name}</span>
        </div>

        <div className='infoBox__inputCol'>
          <label className='infoBox__label'>
            Email:
          </label>
          <span className='infoBox__info'>{info.email}</span>
        </div>

        <div className='infoBox__inputCol'>
          <label className='form__label'>
            Phone:
          </label>
          <span className='infoBox__info'>
            ({info.phone1}) {info.phone2} - {info.phone3}
          </span>
        </div>
      </div>
    );
  }

  let icon = renderForm ? 'times' : 'pencil';

  return (
    <div className='infoBox__outer'>
      <Instructions>
        <p className='instructions__paragraph'>
          Try editing form. This componenent is to show a nice way to display
          and edit information for a user.
        </p>

        <p className='instructions__paragraph'>
          Saving it will not submit a form anywhere. It will just update the info
          display state until the browser is refreshed.
        </p>
      </Instructions>

      <div className='infoBox'>
        <div className='infoBox__topRow'>
          <h3 className='infoBox__header'>Information</h3>

          <i className={`infoBox__icon fa fa-${icon}`} aria-hidden="true" onClick={() => editInfo(!renderForm)}></i>
        </div>

        {renderInfoOrForm()}
      </div>
    </div>
  );
}

export default DisplayEdit;
