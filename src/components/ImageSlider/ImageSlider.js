import './ImageSlider.scss';
import React        from 'react';
import Instructions from '../Instructions/Instructions';
import { Link }     from 'react-router-dom';

const ImageSlider = ({ images, imageIndex, decrementImage, incrementImage }) => {
  const renderImageNumbers = () => {
    const totalImageNumber   = images.length;
    const currentImageNumber = imageIndex + 1;

    return (
      <div className='imageSlider__numbers'>
        {currentImageNumber} / {totalImageNumber}
      </div>
    );
  }

  if (images.length) {
    return (
      <div className='imageSlider'>
        <div className='imageSlider__imageContainer'>
          <img className='imageSlider__image' src={images[imageIndex]}/>
        </div>

        <div className='imageSlider__controls'>
          <div className='imageSlider__toggle imageSlider__toggle--minus' onClick={() => decrementImage()}>
            <i className="fa fa-caret-left" aria-hidden="true"></i>
          </div>

          {renderImageNumbers()}

          <div className='imageSlider__toggle imageSlider__toggle--plus' onClick={() => incrementImage()}>
            <i className="fa fa-caret-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className='imageSlider imageSlider--instructions'>
        <Instructions>
          <p className='instructions__paragraph'>
            Go to <Link to='/fave-images' className='instructions__link'> Fave Images </Link>
          </p>

          <p className='instructions__paragraph'>
            Images you fave will populate the carousel.
          </p>
        </Instructions>
      </div>
    );
  }
}

export default ImageSlider;
