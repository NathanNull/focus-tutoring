import { createUseStyles } from 'react-jss';
import logo from '../assets/logo.png'
import classroomImage from '../assets/classroom.jpg';

function Footer() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.spacer} />
        <a className={styles.title} href="#/">Tutoring Or Something</a>
        <div className={styles.linkBar}>
          <a className={styles.link} href="#/about">About</a>
          <a className={styles.link} href="#/services">Services</a>
          <a className={styles.link} href="#/contact">Contact</a>
        </div>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  footer: {
    width: '100%',
    height: '8rem',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& *': { // Any item that's a child of this one
      marginLeft: 10,
      marginRight: 20,
    },
  },
  spacer: {
    flex: 1,
  },
  linkBar: {
    flex: 1,
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'column',
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
    paddingTop: '3rem'
  },
})

export default Footer;