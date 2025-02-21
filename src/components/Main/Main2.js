import React from 'react';
import AppItem from '../AppItem';
import { educations, internships } from '../../data';

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
      <h2>Courses</h2>
      {internships.map(cert => {
        return (
          <AppItem
            key={cert.name}
            fromDate={cert.from}
            toDate={cert.to}
            title={cert.title}
            name={cert.name}
            details={cert.details}
          />
        );
      })}
    </div>
  </>);
};

export default Main2;
