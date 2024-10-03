import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { MenuSvg } from '../Svg/MenuSvg';
import { CartSvg } from '../Svg/CartSvg';

export const Navigation = () => {
  return (
    <nav className={styles['navigation']}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(styles['navigation-link'], {
            [styles['active']]: isActive
          })
        }
      >
        <span className={styles['navigation-icon']}>
          <MenuSvg />
        </span>
        <span>Меню</span>
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          cn(styles['navigation-link'], {
            [styles['active']]: isActive
          })
        }
      >
        <span className={styles['navigation-icon']}>
          <CartSvg />
        </span>
        <span>Корзина</span>
      </NavLink>
    </nav>
  );
};
