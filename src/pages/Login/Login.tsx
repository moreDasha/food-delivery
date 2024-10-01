import styles from './Login.module.css';
import { Title } from '../../components/Title/Title';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { FormEvent } from 'react';

export function Login() {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles['login']}>
      <Title>Вход</Title>
      <form className={styles['login-form']} onSubmit={submit}>
        <div className={styles['inputs-wrap']}>
          <label className={styles['label']}>
            <span className={styles['placeholder']}>Email</span>
            <Input placeholder='Email'/>
          </label>
          <label className={styles['label']}>
            <span className={styles['placeholder']}>Пароль</span>
            <Input placeholder='Пароль'/>
          </label>
        </div>
        <Button appearence='large'>Вход</Button>
      </form>
      <div className={styles['helper']}>
        <span className={styles['lhelper-text']}>Нет аккаунта?</span>
        <Link to="/auth/registration" className={styles['helper-link']} >Зарегистрироваться</Link>
      </div>
    </div>
  );
}