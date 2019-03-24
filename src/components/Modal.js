import React from 'react';
import ReactDOM from 'react-dom';
import Colors from './Colors';
import { Link } from 'react-router-dom';

const Modal = props => {
  const chosenColor = (color) => {
    // console.log('the color clicked was: ', color);
    document.body.style.background = `#${color}`;
    props.history.push('/');
  }
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="ui active modal">
          <div className="header"> Choose a Color</div>
          <div className="scrolling content">
            <Colors chosenColor={chosenColor}/>
          </div>
          <div className="actions">
            <Link to="/" className="ui red button">Cancel</Link>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
