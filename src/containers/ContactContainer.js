import React, { Component } from 'react';
import Contact              from '../components/Contact/Contact';
import 'whatwg-fetch';

class ContactContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formState : {
        name    : '',
        email   : '',
        message : ''
      },
      disableSendButton: false,
      render: 'contact shane'
    }

    this.handleChange      = this.handleChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ formState: {...this.state.formState, [event.target.id]: event.target.value }});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ disableSendButton: true} );

    return fetch(`https://formspree.io/shanebeehler@me.com`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.formState)
    })
    .then(
      response => {
        if(response.status === 200){
          this.setState({ render: 'success' });
        }
        else {
          this.setState({ render: 'error' });
        }
      }
    )
  }

  render() {
    return (
      <Contact
        formState={this.state.formState}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        disableSendButton={this.state.disableSendButton}
        render={this.state.render}
      />
    );
  }
}

export default ContactContainer;
