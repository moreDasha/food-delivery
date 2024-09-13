import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Navigation = () => {
  return (
    <nav className={styles['navigation']}>
      <NavLink to="/" className={({ isActive }) => cn(styles['navigation-link'], {
        [styles['active']]: isActive
      })}>
        <span className={styles['navigation-icon']}>
          <img src="img/icons/menu.svg" alt="navigation icon" />
        </span>
        <span>Меню</span>
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => cn(styles['navigation-link'], {
        [styles['active']]: isActive
      })}>
        <span className={styles['navigation-icon']}>
          <img src="img/icons/cart.svg" alt="navigation icon" />
        </span>
        <span>Корзина</span>
      </NavLink>
    </nav>
  );
};
