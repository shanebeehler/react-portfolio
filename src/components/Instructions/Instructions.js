import './Instructions.scss';
import React from 'react';

const Instructions = ({ children }) => {
  return (
    <div className='instructions'>
      {children}
    </div>
  );
}

export default Instructions;
