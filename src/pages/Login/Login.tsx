import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useEffect } from 'react';
import { LoginForm } from './Login.types';
import { Title } from '../../components/Title/Title';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { login, uesrActions } from '../../store/user.slice';

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch> ();
  const { jwt, loginErrorMessage } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const sendLogin = async (email: string, password: string) =>  {
    dispatch(login({email, password}));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(uesrActions.clearLoginError());
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  return (
    <div className={styles['login']}>
      <Title>Вход</Title>
      <form className={styles['login-form']} onSubmit={submit}>
        <div className={styles['inputs-wrap']}>
          <label className={styles['label']}>
            <span className={styles['placeholder']}>Email</span>
            <Input required name="email" type="email" placeholder="Email" />
          </label>
          <label className={styles['label']}>
            <span className={styles['placeholder']}>Пароль</span>
            <Input required name="password" type="password" placeholder="Пароль" />
          </label>
          {loginErrorMessage && <span className={styles['error']}>{loginErrorMessage}</span>}
        </div>
        <Button appearence="large">Вход</Button>
      </form>
      <div className={styles['helper']}>
        <span className={styles['lhelper-text']}>Нет аккаунта?</span>
        <Link to="/auth/registration" className={styles['helper-link']}>
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
}
