import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={styles['navigation']}>
      <Link to="/" className={styles['navigation-link']}>
        <span className={styles['navigation-icon']}>
          <img src="menu.svg" alt="navigation icon" />
        </span>
        <span>Меню</span>
      </Link>
      <Link to="/cart" className={styles['navigation-link']}>
        <span className={styles['navigation-icon']}>
          <img src="cart.svg" alt="navigation icon" />
        </span>
        <span>Корзина</span>
      </Link>
    </nav>
  );
};
