import Header from './Header';
import { useGlobalStyles } from '../styles';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { createUseStyles } from 'react-jss';
import Footer from './Footer';

function Contact() {
  const gStyles = useGlobalStyles();
  const styles = useStyles();

  const [name, email, message] = [useRef(null), useRef(null), useRef(null)];

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function sendEmail() {
    let valid = true;

    if (name.current.value === "") {
      name.current.classList.add(styles.red_border);
      valid = false;
    } else {
      name.current.classList.remove(styles.red_border);
    }

    if (email.current.value === "" || !validateEmail(email.current.value)) {
      email.current.classList.add(styles.red_border);
      valid = false;
    } else {
      email.current.classList.remove(styles.red_border);
    }

    if (message.current.value === "") {
      message.current.classList.add(styles.red_border);
      valid = false;
    } else {
      message.current.classList.remove(styles.red_border);
    }

    if (valid) {
      window.gtag('event', 'conversion_event_contact', {'send_to': 'G-JTKDDTKKT7/CONTACT'})

      emailjs.send("tutorformsender", "tutorform", {
        sender_name: name.current.value,
        sender_email: email.current.value,
        message: message.current.value,
      }, '-Ie6Wq69pFUOb8onH').then(res => {
        if (res.status === 200) {
          /**
           * @type {Element}
           */
          name.current.value = "";
          email.current.value = "";
          message.current.value = "";
        }
      });
    }
  }

  return (
    <>
      <Header>
        <div className={gStyles.titleText}>Contact Us</div>
      </Header>
      <div className={gStyles.content}>
        <div className={gStyles.header} style={{paddingBottom: 20}}>
          Interested? Let us know.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <input className={styles.input} placeholder='Name' ref={name} />
            <input className={styles.input} placeholder='Email' ref={email} />
          </div>
          <textarea className={styles.message} placeholder='Message' ref={message} />
          <button onClick={sendEmail} className={gStyles.button}>Send</button>
        </div>
        You can also reach us at focustutoringfv@gmail.com
      </div >
      <Footer />
    </>
  );
}

const useStyles = createUseStyles({
  input: {
    width: '20rem',
    maxWidth: '42%',
    margin: {
      left: 5,
      right: 5,
    },
    border: {
      width: 1,
      color: 'black',
      style: 'solid',
    },
    borderRadius: 5,
    backgroundColor: '#e4e4e4',
    fontSize: 20
  },
  message: {
    width: '90%',
    height: '20vh',
    margin: {
      top: 10,
      bottom: 10,
    },
    border: {
      width: 1,
      color: 'black',
      style: 'solid',
    },
    borderRadius: 5,
    backgroundColor: '#e4e4e4',
    fontSize: 20,
  },
  red_border: {
    border: {
      color: 'red',
    },
    backgroundColor: '#ffe4e4',
  },
})

export default Contact;