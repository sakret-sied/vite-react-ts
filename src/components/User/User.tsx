import styles from './User.module.css';
import { JSX } from 'react';

function User(): JSX.Element {
  return (
    <div className={styles.user}>
      <img className={styles.avatar} src="/avatar.jpg" alt="Avatar icon" />
      <div className={styles.name}>User Name</div>
      <div className={styles.email}>user@mail.com</div>
    </div>
  );
}

export default User;
