import React, { Component }       from 'react';
import { connect }                from 'react-redux';
import { bindActionCreators }     from 'redux';
import { faveImage, unfaveImage } from '../actions/fave';
import MainSection                from '../components/MainSection/MainSection';
import ImageSlider                from '../components/ImageSlider/ImageSlider';
import BottomNav                  from '../components/BottomNav/BottomNav';

class ImageSliderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,
      images: this.props.faveImages
    }

    this.decrementImage = this.decrementImage.bind(this);
    this.incrementImage = this.incrementImage.bind(this);
  }

  decrementImage() {
    if (this.state.imageIndex === 0) {
      this.setState({ imageIndex: this.state.images.length - 1 });
    }
    else {
      this.setState({ imageIndex: this.state.imageIndex - 1 });
    }
  }

  incrementImage() {
    if (this.state.imageIndex === this.state.images.length - 1) {
      this.setState({ imageIndex: 0 });
    }
    else {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
  }

  renderImageNumbers() {
    const totalImageNumber   = this.state.images.length;
    const currentImageNumber = this.state.imageIndex + 1;

    return (
      <div className='imageSlider__numbers'>
        {currentImageNumber} / {totalImageNumber}
      </div>
    );
  }

  render() {
    return (
      <MainSection>
        <ImageSlider
          images={this.state.images}
          imageIndex={this.state.imageIndex}
          decrementImage={this.decrementImage}
          incrementImage={this.incrementImage}/>

        <BottomNav
          leftLinkName='Fave Images'
          leftRoute='/fave-images'
          rightLinkName='View/Edit Info'
          rightRoute='/edit-information'/>          
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageSliderContainer);
