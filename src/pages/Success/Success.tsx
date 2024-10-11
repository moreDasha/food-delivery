import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { BreakfastSvg } from '../../components/Svg/BreakfastSvg';
import { LobsterSvg } from '../../components/Svg/LobsterSvg';
import { SkewerSvg } from '../../components/Svg/SkewerSvg';
import { VegetablesSvg } from '../../components/Svg/VegetablesSvg';
import { BagSvg } from '../../components/Svg/BagSvg';
import styles from './Success.module.css';

export function Success() {
  const navigate = useNavigate();

  return (
    <div className={styles['success']}>
      <div className={styles['success-icons']}>
        <div className={styles['success-icons-top-row']}>
          <BreakfastSvg />
          <SkewerSvg />
          <LobsterSvg />
          <VegetablesSvg />
        </div>
        <div className={styles['success-icons-bottom-row']}>
          <BagSvg />
        </div>
      </div>
      <div className={styles['success-text']}>
        <p>Заказ успешно оформлен!</p>
        <Button appearence="large" onClick={() => navigate('/')}>
          Новый заказ
        </Button>
      </div>
    </div>
  );
}
