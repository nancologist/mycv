import React from 'react';
import './Side.css';
import mypic from '../../assets/img/mori.jpeg';

import { myLinks } from '../../data';

const Side = () => {
  return (
    <>        
      <div className="pic-container">
        <img src={mypic} alt="profile pic" className="pic"/>
      </div>
      
      <div className="side__section contact">
        <h3 className="section__title">Contact</h3>
        <div className="section__body">
          <p>Schnellerstr. 38</p>
          <p>12439 Berlin</p>
          <p>Germany</p>
          <p>+49 157 587 48279</p>
          <p>
            <a href="mailto: nancologist@gmail.com">nancologist@gmail.com</a>
          </p>
          <p>
            <a href="https://www.nancologist.com" target="_blank" rel="noopener noreferrer">www.nancologist.com</a>
          </p>
        </div>
      </div>
      
      <div className="side__section links">
        <h3 className="section__title">Links</h3>
        <div className="section__body">
          <ul>
            {myLinks.map(link => {
              return (
                <li key={link.label}>
                  <a
                    href={link.link}
                    rel="noreferrer"
                    target="_blank"
                  >{link.label}</a>  
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="side__section links">
        <h3 className="section__title">Skills</h3>
      </div>

      <div className="side__section langs">
        <h3 className="section__title">Languages</h3>
        <div className="section__body">German, English</div>
      </div>
    </>
  );
}

export default Side;