import React, { Component } from 'react';
import Form                 from '../components/Form/Form';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name  : this.props.info.name,
      email : this.props.info.email,
      phone1 : this.props.info.phone1,
      phone2 : this.props.info.phone2,
      phone3 : this.props.info.phone3
    }

    this.handleChange      = this.handleChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
    this.disableSaveButton = this.disableSaveButton.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveInfo(this.state);
  }

  disableSaveButton() {
    if (JSON.stringify(this.props.info) === JSON.stringify(this.state)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Form
        formState={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        disableSaveButton={this.disableSaveButton}
      />
    );
  }
}

export default FormContainer;
