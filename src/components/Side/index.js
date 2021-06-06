import React from 'react';
import './index.css';
import mypic from '../../assets/img/mori.jpeg';

export default () => {
  return (
    <>        
      <div>
        <img src={mypic} alt="profile pic" className="pic"/>
      </div>
    </>
  );
}