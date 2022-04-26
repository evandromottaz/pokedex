import styles from './Header.module.css';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <img src={logo} alt="logo" />
      </figure>
    </header>
  );
};

export default Header;
