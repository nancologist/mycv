import React from 'react';
import './template.css';

const Template = (props) => {
  return (
    <div className="a4">
      <div className="main">
        {props.main}
      </div>
      <div className="side">
        {props.side}
      </div>
    </div>
  );
};

export default Template;
