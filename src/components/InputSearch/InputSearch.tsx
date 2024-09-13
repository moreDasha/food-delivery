import styles from './InputSearch.module.css';
import cn from 'classnames';
import { InputSearchProps } from './InputSearch.props';
import { forwardRef } from 'react';

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  function InputSearch({ ...props }, ref) {
    return (
      <div className={styles['input-search-wrap']}>
        <span className={styles['input-search-icon']}>
          <img src="img/icons/search.svg" alt="search icon" />
        </span>
        <input className={cn(styles['input-search'])} ref={ref} {...props}/>
      </div>
    );
  }
);