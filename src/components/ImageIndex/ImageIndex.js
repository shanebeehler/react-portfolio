import './ImageIndex.scss';
import React, { Component } from 'react';
import image1               from '../../assets/2.jpg';
import image2               from '../../assets/3.jpg';
import image3               from '../../assets/4.jpg';
import image4               from '../../assets/5.jpg';
import image5               from '../../assets/6.jpg';
import image6               from '../../assets/7.jpg';
import FaveContainer        from '../../containers/FaveContainer';
import Instructions         from '../Instructions/Instructions';
import { Link }             from 'react-router-dom';

class ImageIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [ image1, image2, image3, image4, image5, image6 ]
    }
  }

  renderImages() {
    return this.state.images.map(image => {
      return (
        <div className='faveImages__col' key={image}>
          <FaveContainer image={image}/>
          <img className='faveImages__image' src={image}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='faveImages'>
        <Instructions>
          <p className='instructions__paragraph'>
            Fave a few images by clicking the heart. After refreshing they will
            still be faved.
          </p>

          <p className='instructions__paragraph'>
            Images that you fave will populate the
            <Link to='/image-slider' className='instructions__link'> Image Carosel </Link>
            component.
          </p>
        </Instructions>

        {this.renderImages()}
      </div>
    );
  }
}

export default ImageIndex;
