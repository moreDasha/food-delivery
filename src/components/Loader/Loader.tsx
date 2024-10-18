import { BowlSvg } from '../Svg/BowlSvg';
import { WaveSvg } from '../Svg/WaveSvg';
import styles from './Loader.module.css';
import cn from 'classnames';

export const Loader = ({ text, layout }: {text: string, layout?: string}) => {
  return (
    <div className={cn(styles['loader'], {[styles['alone']]: layout})}>
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
