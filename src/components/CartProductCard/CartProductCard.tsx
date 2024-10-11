import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { ErrorSvg } from '../Svg/ErrorSvg';
import styles from './CartProductCard.module.css';
import { CartProductCardProps } from './CartProductCard.props';
import { cartActions } from '../../store/cart.slice';

export const CartProductCard = (props: CartProductCardProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const addProduct = () => {
    dispatch(cartActions.addProduct(props.id));
  };

  const removeProduct = () => {
    dispatch(cartActions.removeProduct(props.id));
  };

  return (
    <div className={styles['cart-product-card']}>
      <div className={styles['img']}>
        <img src={props.img} alt="product photo" />
      </div>
      <div className={styles['info']}>
        <div className={styles['info-text']}>
          <p className={styles['name']}>{props.name}</p>
          <div className={styles['price']}>
          {props.price}
            <span>₽</span>
          </div>
        </div>
        <div className={styles['info-buttons']}>
          <button className={styles['amount-remove-button']} onClick={removeProduct}>&minus;</button>
          <span className={styles['amount']}>{props.amount}</span>
          <button className={styles['amount-add-button']} onClick={addProduct}>+</button>
        </div>
      </div>
      <div>
        <button className={styles['remove-button']} onClick={removeProduct}>
          <ErrorSvg />
        </button>
      </div>
    </div>
  );
};