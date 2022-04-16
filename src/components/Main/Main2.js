import React from 'react';
import AppItem from '../AppItem';
import { educations } from '../../data';

const Main2 = () => {
  return (<>
    <div className="section">
      <h2>Private Projects</h2>
      <p>ToDo....</p>
    </div>
    <div className="section certs">
      <h2>IT Certifications</h2>
      <p>ToDo....</p>
    </div>
    <div className="section education">
      <h2>Education</h2>
      {educations.map(edu => {
          return (
            <AppItem
              key={edu.name}
              fromDate={edu.from}
              toDate={edu.to}
              title={edu.title}
              name={edu.name}
              details={edu.details}
            />
          );
        })}
    </div>
  </>);
};

export default Main2;
