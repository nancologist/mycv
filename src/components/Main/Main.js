import React from 'react';
import AppItem from '../AppItem';
import './Main.css';
import { workXps } from '../../data'

const Main = (props) => {

  return (
    <>
      <div className="section title">
        <h1>Angelique Kampe</h1>
        <small>Sozialpädagogin</small>
      </div>

      {/*<div className="section profile">*/}
      {/*  <h2>Profile</h2>*/}
      {/*  <p>Fullstack engineer with {new Date().getFullYear() - 2019} years of hands-on experience designing, developing and implementing the applications, solutions and quality assurance using a wide range of technologies and programming languages.</p>*/}
      {/*  <p>Using best practices and latest design patterns to improve the code quality.</p>*/}
      {/*  <p>A team player, worked in big teams using agile project methods and tools. Disciplined and following team rules and clean codes. Postivie technical discussions with other team members.</p>*/}
      {/*  <p>Enthusiast to learn new technologies and making my knowledge deeper in technologies which I have used over the years.</p>*/}
      {/*</div>*/}

      <div className="section employment">
        <h2>Berufliche Laufbahn</h2>
        {workXps.map(xp => {
          return (
            <AppItem
              key={xp.name}
              fromDate={xp.from}
              toDate={xp.to}
              title={xp.title}
              name={xp.name}
              details={xp.details}
            />
          );
        })}
      </div>

      {/*<div className="section">*/}
      {/*  <h2>Private Projects</h2>*/}
      {/*  <p>Checkout my <a href={'https://github.com/nancologist'}>Github</a>.</p>*/}
      {/*</div>*/}
    </>
  );
};

export default Main;
