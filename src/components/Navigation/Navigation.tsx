import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { MenuSvg } from '../Svg/MenuSvg';
import { CartSvg } from '../Svg/CartSvg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Navigation = () => {

  const products = useSelector((state: RootState) => (state.cart.products));

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
        <span className={styles['navigation-cart-counter']}>{products.reduce((acc, item) => (acc += item.amount), 0)}</span>
      </NavLink>
    </nav>
  );
};
