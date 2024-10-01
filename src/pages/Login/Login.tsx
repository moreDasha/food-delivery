import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { LoginForm } from './Login.types';
import { LoginData } from './Login.types';
import { Title } from '../../components/Title/Title';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

export function Login() {
  const [error, setError] = useState<string | null>();

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.get<LoginData[]>(
        'https://moredasha.github.io/food-delivery/backend/login.json'
      );
      const user = data.find(
        (item) => item.email === email && item.password === password
      );
      if (!user) {
        setError('Неверный логин или пароль');
      } else {
        console.log(user.access_token);
      }
      //return user.access_token;
    } catch(e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      return;
    }
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
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
          {error && <span className={styles['error']}>{error}</span>}
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
