import { ErrorSvg } from '../Svg/ErrorSvg.tsx';
import styles from './ErrorItem.module.css';
import { ErrorItemProps } from './ErrorItem.props.ts';

export const ErrorItem = ({ text }: ErrorItemProps) => {
  return (
    <div className={styles['error']}>
      <span className={styles['error-icon']}>
        <ErrorSvg />
      </span>
      <div className={styles['error-text-wrap']}>
        <span>Что-то пошло не так</span>
        <span>{ text }</span>
      </div>
    </div>
  );
};