import { createUseStyles } from 'react-jss';
import logo from '../assets/logo.svg'
import classroomImage from '../assets/classroom.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from 'react';

function LinkBar({ styles, innerClass, innerRef }) {
  return <div className={innerClass} ref={innerRef}>
    <a className={styles.link} href="#/about">About The Tutor</a>
    <a className={styles.link} href="#/services">Services</a>
    <a className={styles.link} href="#/contact">Contact</a>
  </div>
}

function Header({ children, long_hero_section = false }) {
  const styles = useStyles(long_hero_section);
  /**
   * @type {React.MutableRefObject<HTMLDivElement>}
   */
  const linkBarMobile = useRef(null);
  // For whatever reason, setting this to true initially makes
  // the program believe it's false. It's fine.
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      linkBarMobile.current.style.display = "flex"
    } else {
      linkBarMobile.current.addEventListener('animationend', () => {
        linkBarMobile.current.style.display = "none"
      }, {once: true})
    }
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarMobile}>
          <div style={{ flex: 1 }} />
          <a href="#/">
            <img src={logo} alt="logo" className={styles.logo} />
          </a>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <MenuIcon htmlColor='white' />
          </div>
          <LinkBar styles={styles} innerClass={styles.linkBar} />
        </div>
        <LinkBar
          styles={styles}
          innerClass={`${styles.linkBarMobile} ${isMenuOpen ? styles.animateBackwards : styles.animateForwards}`}
          innerRef={linkBarMobile}
        />
      </div>
      <div className={styles.homeView}>
        {children}
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  '@keyframes slideDown': {
    '0%': { maxHeight: 0, opacity: 0 },
    '100%': { maxHeight: '200px', opacity: 1 },
  },
  '@keyframes slideUp': {
    '0%': { maxHeight: '200px', opacity: 1 },
    '100%': { maxHeight: 0, opacity: 0 },
  },
  navbar: {
    width: '100%',
    position: 'fixed',
  },
  navbarMobile: {
    width: '100%',
    height: '5rem',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& *': { // Any item that's a child of this one
      marginLeft: 10,
      marginRight: 20,
      '@media (pointer:coarse)': {
        marginRight: 5,
        marginLeft: 5,
      },
    },
  },
  logo: {
    height: '90%',
  },
  menuIcon: {
    display: 'none',
    '@media (pointer:coarse)': {
      display: 'flex',
    },
    flex: 1,
    justifyContent: 'end'
  },
  linkBar: {
    display: 'flex',
    justifyContent: 'end',
    flex: 1,
    '@media (pointer:coarse)': {
      display: 'none'
    },
  },
  linkBarMobile: {
    display: 'none',
    backgroundColor: '#202020',
    flexDirection: 'column',
    justifyContent: 'end',
    flex: 1,
    '@media not (pointer:coarse)': {
      display: 'none'
    },
    borderTop: {
      width: 1,
      color: 'white',
      style: 'solid',
    },
    '& *': {
      width: '100%',
      textAlign: 'center',
      padding: 10,
      borderBottom: {
        width: 1,
        color: 'white',
        style: 'solid',
      },
    }
  },
  animateForwards: {
    animationName: '$slideDown',
    animationDuration: 500,
  },
  animateBackwards: {
    animationName: '$slideUp',
    animationDuration: 500,
    animationFillMode: 'forwards',
  },
  link: {
    textTransform: 'uppercase',
    color: 'white',
    '@media (pointer:coarse)': {
      fontSize: 15,
    },
    fontFamily: 'monospace',
    fontWeight: 'bolder',
    textDecoration: 'none',
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 30,
    '@media (pointer:coarse)': {
      fontSize: 20,
    },
    fontWeight: 'bolder',
    textWrap: 'nowrap',
    color: 'white',
    textDecoration: 'none',
  },
  homeView: long => ({
    // Tint the image with a gradient of blacks
    backgroundImage: [gradient, `url(${classroomImage})`],
    backgroundSize: 'cover',
    width: '100%',
    height: long ? '85vh' : '75vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '3rem'
  }),
})
const gradient = 'linear-gradient(rgba(0, 0, 0, ' + ['0.7', '0.65', '0.55', '0.4'].join('), rgba(0, 0, 0, ') + '))';

export default Header;