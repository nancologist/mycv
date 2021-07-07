import React from 'react';
import './index.css';

export default (props) => {
  const { fromDate, toDate, companyName, jobTitle, jobTasks } = props; 

  return (
    <div className="section__item">
      <div className="section__item__date">{fromDate} - {toDate}</div>
      <div className="section__item__content content">
        <div className="content__title">
          <h3>{jobTitle}</h3>
          <span className="content__title__sub">{companyName}</span>
        </div>
        <ul className="content__list">
          {jobTasks.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>  
  );
};
