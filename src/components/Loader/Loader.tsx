import styles from './Loader.module.css';
import { LoaderProps } from './Loader.props';

export const Loader = ({ text }: LoaderProps) => {
  return (
    <div className={styles['loader']}>
      <div className={styles['loader-icon-group']}>
        <span className={styles['loader-icon-wave']}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21,5c-2.25,0-2.25,2-4.5,2S14.25,5,12,5,9.75,7,7.5,7,5.25,5,3,5"></path>
            <path d="M21,11c-2.25,0-2.25,2-4.5,2S14.25,11,12,11,9.75,13,7.5,13,5.25,11,3,11"></path>
            <path d="M21,17c-2.25,0-2.25,2-4.5,2S14.25,17,12,17,9.75,19,7.5,19,5.25,17,3,17"></path>
          </svg>
        </span>
        <span className={styles['loader-icon-plate']}>
          <img src="img/icons/fav.svg" alt="loader icon" />
        </span>
      </div>
      <span className={styles['loader-text']}>{text}</span>
    </div>
  );
};
