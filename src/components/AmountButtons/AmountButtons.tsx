import { useDispatch } from 'react-redux';
import styles from './AmountButtons.module.css';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { AmountButtonsProps } from './AmountButtons.props';

export const AmountButtons = (props: AmountButtonsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const addProduct = () => {
    dispatch(cartActions.addProduct(props.id));
  };

  const decreaseProductAmount = () => {
    dispatch(cartActions.decreaseProductAmount(props.id));
  };

  return (
    <div className={styles['buttons-wrap']}>
      <button
        className={styles['remove-button']}
        disabled={props.amount ? false : true}
        onClick={decreaseProductAmount}
      >
        &minus;
      </button>
      <span className={styles['amount']}>{props.amount || 0}</span>
      <button
        className={styles['add-button']}
        onClick={addProduct}
      >
        +
      </button>
    </div>
  );
};
