import './ImageIndex.scss';
import React, { Component } from 'react';
import image3               from '../../assets/4.jpg';
import shaneAndZin          from '../../assets/shaneAndZin.jpg';
import shaneAndZin2         from '../../assets/shaneAndZin2.jpg';
import shaneAndKids         from '../../assets/shaneAndKids.jpg';
import shaneAndAsh          from '../../assets/shaneAndAsh.jpg';
import married              from '../../assets/married.jpg';
import image5               from '../../assets/6.jpg';
import FaveContainer        from '../../containers/FaveContainer';
import Instructions         from '../Instructions/Instructions';
import { Link }             from 'react-router-dom';

class ImageIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [ shaneAndZin, shaneAndZin2, shaneAndAsh, married, image3, image5 ]
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
