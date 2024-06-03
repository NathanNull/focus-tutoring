import { createUseStyles } from 'react-jss';
import logo from '../assets/logo.png'
import classroomImage from '../assets/classroom.jpg';

function Header({ children }) {
  const styles = useStyles();
  return (
    <>
      <div className={styles.navbar}>
        <a href="#/" className={styles.logo}>
          <img src={logo} alt="logo" style={{ height: '100%' }} />
        </a>
        <a className={styles.title} href="#/">Tutoring Or Something</a>
        <div className={styles.linkBar}>
          <a className={styles.link} href="#/about">About</a>
          <a className={styles.link} href="#/services">Services</a>
          <a className={styles.link} href="#/contact">Contact</a>
        </div>
      </div>
      <div className={styles.homeView}>
        {children}
      </div>
    </>
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
    flex: 1,
  },
  linkBar: {
    flex: 1,
    display: 'flex',
    justifyContent: 'end'
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
  },
  homeView: {
    // Tint the image with a gradient of blacks
    backgroundImage: ['linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.5))', `url(${classroomImage})`],
    backgroundSize: 'cover',
    width: '100%',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Header;