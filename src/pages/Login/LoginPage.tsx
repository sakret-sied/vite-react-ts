import { JSX, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFormEvent } from '../../interfaces/LoginFormEvent.ts';
import { AppDispatch, RootState } from '../../store/store.ts';
import { JWT_KEY, loginThunk, userActions } from '../../store/user.slice.ts';
import Button from '../../components/Button/Button.tsx';
import Heading from '../../components/Heading/Heading.tsx';
import Input from '../../components/Input/Input.tsx';
import styles from './LoginPage.module.css';

function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { [JWT_KEY]: jwt, error } = useSelector((s: RootState) => s.user);

  useEffect((): void => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const submitHandler = async (
    e: LoginFormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(userActions.clearError());
    const { email, password } = e.target;
    dispatch(loginThunk({ email: email.value, password: password.value }));
  };

  return (
    <div className={styles.login}>
      <Heading>Вход</Heading>
      {error ? <div className={styles.error}>{error}</div> : ''}
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш email</label>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="on"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="on"
          />
        </div>
        <Button appearance="big">Вход</Button>
      </form>
      <div className={styles.links}>
        <div>Нет акканута?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
}

export default LoginPage;
