import React, { Component }              from 'react';
import { connect }                       from 'react-redux';
import { bindActionCreators }            from 'redux';
import { faveImage, unfaveImage }        from '../actions/fave';
import Fave                              from '../components/Fave/Fave';


class FaveContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faved: false
    };

    this.initialFaveClass = this.initialFaveClass.bind(this);
    this.updateFaveClass  = this.updateFaveClass.bind(this);
  }

  componentDidMount() {
    this.initialFaveClass();
  }

  initialFaveClass() {
    if (this.props.faves.images.some(image => {
      return image === this.props.image;
    })) {
      this.setState({ faved: true });
    }
  }

  updateFaveClass(action) {
    if (action === 'fave') {
      this.props.faveImage(this.props.image);
      this.setState({ faved: true });
    }
    else if (action === 'unfave') {
      this.props.unfaveImage(this.props.image);
      this.setState({ faved: false });
    }
  }

  render() {
    return (
      <Fave
        faved={this.state.faved}
        updateFaveClass={this.updateFaveClass}
        classFlag={this.props.classFlag}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    faves: state.faves
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    faveImage,
    unfaveImage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FaveContainer);
