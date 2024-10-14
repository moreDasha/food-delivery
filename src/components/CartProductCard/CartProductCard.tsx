import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { ErrorSvg } from '../Svg/ErrorSvg';
import styles from './CartProductCard.module.css';
import { CartProductCardProps } from './CartProductCard.props';
import { cartActions } from '../../store/cart.slice';
import { AmountButtons } from '../AmountButtons/AmountButtons';

export const CartProductCard = (props: CartProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

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
        <AmountButtons id={props.id} amount={props.amount} />
      </div>
      <div>
        <button className={styles['remove-button']} onClick={removeProduct}>
          <ErrorSvg />
        </button>
      </div>
    </div>
  );
};
