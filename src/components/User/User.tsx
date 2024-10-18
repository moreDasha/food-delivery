import { useEffect } from 'react';
import styles from './User.module.css';
import { getProfile } from '../../store/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import cn from 'classnames';

export const User = ({ extraClass }: {extraClass?: string}) => {
  const profile = useSelector((state: RootState) => state.user.profile); 
  const dispatch = useDispatch<AppDispatch>(); 

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className={cn(styles['user'], {
      [styles[`${extraClass}`]]: extraClass
    })}>
      <div className={styles['user-photo']}></div>
      <div className={styles['user-info']}>
        <p className={styles['user-name']}>{profile?.name}</p>
        <p className={styles['user-contact']}>{profile?.email}</p>
      </div>
    </div>
  );
};
