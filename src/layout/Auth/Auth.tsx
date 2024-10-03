import { Outlet } from 'react-router-dom';
import styles from './Auth.module.css';
import { BreakfastSvg } from '../../components/Svg/BreakfastSvg';
import { LobsterSvg } from '../../components/Svg/LobsterSvg';
import { VegetablesSvg } from '../../components/Svg/VegetablesSvg';
import { SkewerSvg } from '../../components/Svg/SkewerSvg';

export function Auth() {
  return (
    <div className={styles['auth']}>
      <div className={styles['decor-part']}>
        <div className={styles['decor']}>
          <div className={styles['decor-line']}>
            <BreakfastSvg />
          </div>
          <div className={styles['decor-center']}>
            <SkewerSvg />
            <VegetablesSvg />
          </div>
          <div className={styles['decor-line']}>
            <LobsterSvg />
          </div>
        </div>
      </div>
      <div className={styles['content']}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
