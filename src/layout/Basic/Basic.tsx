import { Outlet } from 'react-router-dom';
import styles from './Basic.module.css';
import { SidePanel } from '../../components/SidePanel/SidePanel';

export function Basic() {
  return (
    <div className={styles['basic']}>
	    <SidePanel/>
      <div className={styles['content']}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
