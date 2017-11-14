import React, { Component } from 'react';
import Contact              from '../components/Contact/Contact';
import 'whatwg-fetch';

class ContactContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name    : '',
      email   : '',
      message : ''
    }

    this.handleChange      = this.handleChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    return fetch(`http://formspree.io/shanebeehler@me.com`, {
      method: 'POST',
      body: new FormData(this.state)
    })
    .then(
      response => {
        if(response.status === 200){
          console.log('Request succeeded with JSON response', response);
        }
        else {
          // dispatch(fetchPostsError())
        }
      }
    )
  }

  render() {
    return (
      <Contact
        formState={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default ContactContainer;
