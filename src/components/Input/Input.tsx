import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';
import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ isValid = true, ...props }, ref) {
    return (
      <input ref={ref} className={cn(styles['input'], styles[`${isValid}`])} {...props}/>
    );
  }
);