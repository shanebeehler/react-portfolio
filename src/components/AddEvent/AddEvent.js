import './AddEvent.scss';
import React, { Component } from 'react';

class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      date: '',
      startTime: '',
      endTime: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addEvent(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <div className='form__inputCol'>
          <label className='form__label'>
            Name:
          </label>
          <input className='form__input' type='text' id='name' value={this.state.name} onChange={this.handleChange}/>
        </div>

        <div className='form__inputCol'>
          <label className='form__label'>
            Date:
          </label>
          <input className='form__input' type='date' id='date' value={this.state.date} onChange={this.handleChange}/>
        </div>

        <div className='form__inputCol'>
          <label className='form__label'>
            Start Time:
          </label>
          <input className='form__input' type='time' id='startTime' value={this.state.startTime} onChange={this.handleChange}/>
        </div>

        <div className='form__inputCol'>
          <label className='form__label'>
            End Time:
          </label>
          <input className='form__input' type='time' id='endTime' value={this.state.endTime} onChange={this.handleChange}/>
        </div>

        <button className='form__submit' type='submit'>
          Add Event
        </button>
      </form>
    );
  }
}

export default AddEvent;
