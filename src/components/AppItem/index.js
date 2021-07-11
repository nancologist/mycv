import React from 'react';
import styles from './AppItem.module.css';

const AppItem = (props) => {
  const { fromDate, toDate, name, title, details } = props;

  let formattedDate = fromDate
  if (toDate) formattedDate += ' - ' + toDate;

  return (
    <div className={styles.cmp}>
      
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <span className={styles.subTitle}>{name}</span>
        </div>
        <div className={styles.date}>{formattedDate}</div>
      </div>
      
      <div className={styles.content}>
        <ul className={styles.list}>
          {details.map((detail, index) => (<li key={index}>{detail}</li>))}
        </ul>
      </div>

    </div>
  );
};

export default AppItem;
