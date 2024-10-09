import { BreakfastSvg } from '../Svg/BreakfastSvg';
import { LobsterSvg } from '../Svg/LobsterSvg';
import { SkewerSvg } from '../Svg/SkewerSvg';
import { VegetablesSvg } from '../Svg/VegetablesSvg';
import styles from './NoResult.module.css';

export const NoResult = () => {
  return (
    <div className={styles['no-result']}>
      <div className={styles['no-result-icons']}>
        <BreakfastSvg />
        <SkewerSvg />
        <LobsterSvg />
        <VegetablesSvg />
      </div>
      <span className={styles['no-result-text']}>По вашему запросу ничего не найдено</span>
    </div>
  );
};