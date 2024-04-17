import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRegisterEvent } from '../../interfaces/RegisterForm.ts';
import { useLoginCheck } from '../../hooks/useLoginCheck.ts';
import { AppDispatch, RootState } from '../../store/store.ts';
import { userActions } from '../../store/user.slice.ts';
import { registerThunk } from '../../store/user.thunks.ts';
import Button from '../../components/Button/Button.tsx';
import Heading from '../../components/Heading/Heading.tsx';
import Input from '../../components/Input/Input.tsx';
import styles from '../Login/LoginPage.module.css';

function RegisterPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((s: RootState) => s.user);
  useLoginCheck();

  const submitHandler = async (
    e: IRegisterEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(userActions.clearError());
    const { email, name, password } = e.target;
    dispatch(
      registerThunk({
        email: email.value,
        name: name.value,
        password: password.value
      })
    );
  };

  return (
    <div className={styles.login}>
      <Heading>Register</Heading>
      {error ? <div className={styles.error}>{error}</div> : ''}
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.field}>
          <label htmlFor="email">Your email</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="on"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Your password</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="name">Your name</label>
          <Input id="name" name="name" placeholder="Name" autoComplete="on" />
        </div>
        <Button appearance="big">Submit</Button>
      </form>
      <div className={styles.links}>
        <div>Have account?</div>
        <Link to="/auth/login">Login</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
