import styles from './User.module.css';
import { UserProps } from './User.props';

export const User = ({name, email}: UserProps) => {
  return (
    <div className={styles['user']}>
      <div className={styles['user-photo']}></div>
      <div className={styles['user-info']}>
        <p className={styles['user-name']}>{name}</p>
        <p className={styles['user-contact']}>{email}</p>
      </div>
    </div>
  );
};
