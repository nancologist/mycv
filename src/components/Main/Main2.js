import React from 'react';
import AppItem from '../AppItem';
import { educations } from '../../data';

const Main2 = () => {
  return (<>
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

    <div className="section certs">
      <h2>Certifications</h2>
    </div>
  </>);
};

export default Main2;
