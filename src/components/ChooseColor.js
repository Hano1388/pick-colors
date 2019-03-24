import React from 'react';
import { Link } from 'react-router-dom';

const ChooseColor = () => {
  return (
    <div>
      <Link to="/choosecolor" className="ui button primary">Choose a color</Link>
    </div>
  );
};

export default ChooseColor;
