import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = ({ children, className, appearence, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        styles['button'],
        styles['accent'],
        styles[`${appearence}`],
        styles[`${className}`]
      )}
      {...props}
    >
      {children}
    </button>
  );
};
