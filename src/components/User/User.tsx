import styles from './User.module.css';

export const User = () => {
  return (
    <div className={styles['user']}>
      <div className={styles['user-photo']}></div>
      <div className={styles['user-info']}>
        <p className={styles['user-name']}>User12345</p>
        <p className={styles['user-contact']}>user@12345.ru</p>
      </div>
    </div>
  );
};
