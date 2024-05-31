import { createUseStyles } from 'react-jss';
import logo from '../assets/logo.png'

function Navbar() {
  const styles = useStyles();
  return (
    <div className={styles.navbar}>
      <a href="#/" className={styles.logo}>
        <img src={logo} alt="logo" style={{height: '100%'}} />
      </a>
      <div style={{ marginLeft: 'auto' }} />
      <a className={styles.title} href="#/">Tutoring Or Something</a>
      <div style={{ marginLeft: 'auto' }} />
      <a className={styles.link} href="#/about">About</a>
      <a className={styles.link} href="#/services">Services</a>
      <a className={styles.link} href="#/contact">Contact</a>
    </div>
  );
}

const useStyles = createUseStyles({
  navbar: {
    width: '100%',
    height: '3rem',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& *': { // Any item that's a child of this one
      marginLeft: 10,
      marginRight: 20,
    }
  },
  logo: {
    height: '90%',
    aspectRatio: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bolder',
    textDecoration: 'none',
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 30,
    fontWeight: 'bolder',
    color: 'white',
    textDecoration: 'none',
  }
})

export default Navbar;