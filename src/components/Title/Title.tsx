import styles from './Title.module.css';
import { TitleProps } from './Title.props';
import cn from 'classnames';

export const Title = ({ children, className, ...props }: TitleProps) => {
  return (
    <h1 className={cn(styles['title'], styles[`${className}`])} { ...props }>{children}</h1>
  );
};