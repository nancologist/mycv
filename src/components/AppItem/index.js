import React from 'react';
import styles from './AppItem.module.css';

const AppItem = (props) => {
  const { fromDate, toDate, companyName, jobTitle, jobTasks } = props;

  let formattedDate = fromDate
  if (toDate) formattedDate += ' - ' + toDate;

  return (
    <div className={styles.cmp}>
      
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>{jobTitle}</h3>
          <span className={styles.subTitle}>{companyName}</span>
        </div>
        <div className={styles.date}>{formattedDate}</div>
      </div>
      
      <div className={styles.content}>
        <ul className={styles.list}>
          {jobTasks.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </div>

    </div>
  );
};

export default AppItem;
