import React, { Component }       from 'react';
import { connect }                from 'react-redux';
import { bindActionCreators }     from 'redux';
import { faveImage, unfaveImage } from '../actions/fave';
import MainSection                from '../components/MainSection/MainSection';
import ImageIndex                 from '../components/ImageIndex/ImageIndex';
import BottomNav                  from '../components/BottomNav/BottomNav';

class ImageIndexContainer extends Component {
  render() {
    return (
      <MainSection>
        <ImageIndex
          faveImage={this.faveImage}
          unfaveImage={this.unfaveImage}
          faveImages={this.props.faveImages}/>

        <BottomNav
          leftLinkName='Home'
          leftRoute='/'
          rightLinkName='Image Carosel'
          rightRoute='/image-slider'/>
      </MainSection>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    faveImages: state.faves.images
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    faveImage,
    unfaveImage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndexContainer);
