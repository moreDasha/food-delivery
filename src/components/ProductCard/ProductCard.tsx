import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

export const ProductCard = (props: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = () => {
    dispatch(cartActions.addProduct(props.id));
  };

  return (
    <article className={styles['product-card']}>
      <div className={styles['product-card-inner']}>
        <div className={styles['product-img']}>
          <img src={props.img} alt="food photo" />
          <div className={styles['product-price']}>
            {props.price} <span>₽</span>
          </div>
          <div className={styles['product-rating']}>
            {props.rating}
            <span>
              <img src="img/icons/star.svg" alt="star icon" />
            </span>
          </div>
        </div>
        <div className={styles['product-info']}>
          <Link to={`/product/${props.id}`} className={styles['product-name']}>
            {props.name}
          </Link>
          <p className={styles['product-composition']}>{props.composition}</p>
        </div>
      </div>
      <button className={styles['product-cart-btn']} onClick={addToCart}>
        <span>
          <img src="img/icons/cart-white.svg" alt="cart icon" />
        </span>
      </button>
    </article>
  );
};
