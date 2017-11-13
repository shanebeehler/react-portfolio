import './Fave.scss';
import React from 'react';

const Fave = ({ faved, updateFaveClass, classFlag }) => {
  let action = 'fave';
  let className = `fave fave${classFlag}`;
  let iconName = 'heart-o';

  if (faved) {
    action = 'unfave';
    className = className + ' fave--faved';
    iconName  = 'heart';
  }

  return (
    <div className={className} onClick={() => updateFaveClass(action)}>
      <i className={`fa fa-${iconName} fave__icon`} aria-hidden="true"></i>
    </div>
  );
}

export default Fave;
