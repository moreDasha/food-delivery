import { BreakfastSvg } from '../Svg/BreakfastSvg';
import { LobsterSvg } from '../Svg/LobsterSvg';
import { SkewerSvg } from '../Svg/SkewerSvg';
import { VegetablesSvg } from '../Svg/VegetablesSvg';
import styles from './NoResult.module.css';
import cn from 'classnames';

export const NoResult = ({ text, layout }: {text: string, layout?: string}) => {
  return (
    <div className={cn(styles['no-result'], {
      [styles['alone']]: layout
    })}>
      <div className={styles['no-result-icons']}>
        <BreakfastSvg />
        <SkewerSvg />
        <LobsterSvg />
        <VegetablesSvg />
      </div>
      <span className={styles['no-result-text']}>{text}</span>
    </div>
  );
};