import React, { Component } from 'react';
import FormContainer        from './FormContainer';
import MainSection          from '../components/MainSection/MainSection';
import DisplayEdit          from '../components/DisplayEdit/DisplayEdit';
import BottomNav            from '../components/BottomNav/BottomNav';

class DisplayEditContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: 'Jane Doe',
        email: 'janedoe@fakemail.com',
        phone1: 555,
        phone2: 555,
        phone3: 5555
      },
      renderForm: false
    }

    this.editInfo = this.editInfo.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
  }

  editInfo(bool) {
    this.setState({ renderForm: bool });
  }

  saveInfo(newInfo) {
    this.setState({ info: newInfo });
    this.editInfo(false);
  }

  render() {
    return (
      <MainSection>
        <DisplayEdit
          renderForm={this.state.renderForm}
          editInfo={this.editInfo}
          saveInfo={this.saveInfo}
          info={this.state.info}/>

          <BottomNav leftLinkName='Image Carosel' leftRoute='/image-slider' rightLinkName='Event Calendar' rightRoute='/event-calendar'/>
      </MainSection>
    );
  }
}

export default DisplayEditContainer;
