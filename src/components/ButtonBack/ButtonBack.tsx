import { useNavigate } from 'react-router-dom';
import { BackSvg } from '../Svg/BackSvg';
import styles from './ButtonBack.module.css';

export const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <button className={styles['button-back']} onClick={() => navigate(-1)}>
      <BackSvg />
    </button>
  );
};