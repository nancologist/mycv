import React from 'react';
import styles from './AppItem.module.css';

export default (props) => {
  const { fromDate, toDate, companyName, jobTitle, jobTasks } = props; 

  return (
    <div className={styles.cmp}>
      
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>{jobTitle}</h3>
          <span className={styles.subTitle}>{companyName}</span>
        </div>
        <div className={styles.date}>{fromDate} - {toDate}</div>
      </div>
      
      <div className={styles.content}>
        <ul className={styles.list}>
          {jobTasks.map((item) => (<li key={item}>{item}</li>))}
        </ul>
      </div>

    </div>
  );
};
