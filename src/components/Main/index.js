import React from 'react';
import AppItem from '../AppItem';
import './Main.css';
import xps from '../../data/experiences.json'

const Main = (props) => {

  return (
    <>
      <div className="section title">
        <h1>Morteza Jalilifar</h1>
        <small>FULL STACK DEVELOPER</small>
      </div>

      <div className="section profile">
        <h2>Profile</h2>
        <p>Fullstack engineer with {new Date().getFullYear() - 2019}+ years of hands-on experience designing, developing and implementing the applications, solutions and quality assurance using a wide range of backend and frontend technologies and programming languages.</p>
        <p>Using best practices and latest design patterns to improve the code quality.</p>
        <p>A team player, worked in big teams using agile project methods and tools. Disciplined and following team rules and clean codes.</p><p>Enthusiast to learn other technologies. Taking courses of other web technologies parallel to the professional works and projects. Keeping on learning and having fun with coding and debugging in days, nights, weekends or even on the way!</p>
      </div>

      <div className="section employment">
        <h2>Experience</h2>
        {xps.map(xp => {
          return (
            <AppItem
              fromDate={xp.from}
              toDate={xp.to}
              jobTitle={xp.jobTitle}
              companyName={xp.companyName}
              jobTasks={xp.tasks}
            />
          );
        })}
      </div>

      <div className="section education">
        <h2>Education</h2>
      </div>

      <div className="section certs">
        <h2>Certifications</h2>
      </div>
    </>
  );
};

export default Main;
