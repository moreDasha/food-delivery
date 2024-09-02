import { Outlet } from 'react-router-dom';
import styles from './Basic.module.css';
import cn from 'classnames';
import { SidePanel } from '../../components/SidePanel/SidePanel';

export function Basic() {
  return (
    <div className={cn(styles['basic'])}>
	  <SidePanel/>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
