import { ReactNode } from 'react';
import styles from './MainContent.module.css';

export const MainContent = ({ children }: {children: ReactNode}) => {
  return (
    <div className={styles['main-content']}>{children}</div>
  );
};