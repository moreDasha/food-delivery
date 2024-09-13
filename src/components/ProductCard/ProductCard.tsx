import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div className={styles['product-card']}>
      <Link to={`/product/${props.id}`} className={styles['product-link']}>
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
          <p className={styles['product-name']}>{props.name}</p>
          <p className={styles['product-composition']}>
            {props.composition}
          </p>
        </div>
      </Link>
      <button className={styles['product-cart-btn']}>
        <span>
          <img src="img/icons/cart-white.svg" alt="cart icon" />
        </span>
      </button>
    </div>
  );
};
