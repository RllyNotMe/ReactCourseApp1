import React from 'react';
import spinner from '../assets/Eclipse-1s-200px.svg';

function Spinner() {
  return (
    <img
      src={spinner}
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
