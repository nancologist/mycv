import React from 'react';
import './Side.css';
import mypic from '../../assets/img/angi.jpeg';

const Side = () => {
  return (
      <>
          <div className="pic-container">
              <img src={mypic} alt="profile pic" className="pic"/>
          </div>

          <div className="side__section contact">
              <h3 className="section__title">Kontakt</h3>
              <div className="section__body">
                  <p>Hermann-Dorner-Allee 13B</p>
                  <p>12489 Berlin</p>
                  <p>Germany</p>
                  <p>+49 151 215 32474</p>
                  <p>
                      <a href="mailto: angelique.kampe@gmail.com">angelique.kampe@gmail.com</a>
                  </p>
              </div>
          </div>

          <div className="side__section langs">
              <h3 className="section__title">Sprachen</h3>
              <div className="section__body"
              >Deutsch (Muttersprache)<br/>
                  Russisch (Muttersprache)<br/>
                  Englisch (fliessend)
              </div>
          </div>

          {/*<div className="side__section links">*/}
          {/*  <h3 className="section__title">Links</h3>*/}
          {/*  <div className="section__body">*/}
          {/*    <ul>*/}
          {/*      {myLinks.map(link => {*/}
          {/*        return (*/}
          {/*          <li key={link.label}>*/}
          {/*            <a*/}
          {/*              href={link.link}*/}
          {/*              rel="noreferrer"*/}
          {/*              target="_blank"*/}
          {/*            >{link.label}</a>*/}
          {/*          </li>*/}
          {/*        )*/}
          {/*      })}*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="side__section skills">*/}
          {/*  <h3 className="section__title">Skills</h3>*/}
          {/*  <div className="section__body">*/}
          {/*{*/}
          {/*  skills.map(({ scope, techs }) => {*/}
          {/*    return (*/}
          {/*      <>*/}
          {/*        <span className="scope"><b>{scope}:</b></span>*/}
          {/*        {*/}
          {/*          techs.map(({ name, level }) => (*/}
          {/*            <div className="skill">*/}
          {/*              <span>{name}</span>*/}
          {/*              <div className="skill__level">*/}
          {/*                {*/}
          {/*                  [1, 2, 3, 4, 5].map(num => <div className={ level >= num ? 'bg-white' : null }></div>)*/}
          {/*                }*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          ))*/}
          {/*        }*/}
          {/*      </>*/}
          {/*    )*/}
          {/*  })*/}
          {/*}*/}

          {/*<span className="scope"><b>Testing:</b></span>*/}
          {/*<span>JUnit, Selenium, Puppeteer, Mockito, ...</span>*/}

          {/*<span className="scope"><b>Others:</b></span>*/}
          {/*<span>Docker, Firebase, AWS, GraphQL, React Native, MongoDB, SQL, PHP, jQuery</span>*/}
          {/*  </div>*/}
          {/*</div>*/}

      </>
  );
}

export default Side;
