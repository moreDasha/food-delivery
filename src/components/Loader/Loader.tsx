import { BowlSvg } from '../Svg/BowlSvg';
import { WaveSvg } from '../Svg/WaveSvg';
import styles from './Loader.module.css';

export const Loader = ({ text }: {text: string}) => {
  return (
    <div className={styles['loader']}>
      <div className={styles['loader-icon-group']}>
        <span className={styles['loader-icon-wave']}>
          <WaveSvg />
        </span>
        <span className={styles['loader-icon-plate']}>
          <BowlSvg />
        </span>
      </div>
      <span className={styles['loader-text']}>{text}</span>
    </div>
  );
};
