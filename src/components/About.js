import Header from './Header';
import { useGlobalStyles } from '../styles';
import { createUseStyles } from 'react-jss';
import Footer from './Footer';
import tutorphoto from '../assets/tutor_photo_nathan.jpg';

function About() {
  const gStyles = useGlobalStyles();
  const styles = useStyles();
  return (
    <>
      <Header>
        <div className={gStyles.titleText}>Meet the Tutor</div>
      </Header>
      <div className={gStyles.content}>
        <div className={styles.content}>
          <div className={styles.about}>
            <div className={gStyles.header}>Nathan Strong</div>
            <div className={gStyles.subheader}>Tutor</div>
            Hi! I'm Nathan, a current student at UFV with a passion for helping others
            succeed academically. I recently graduated from GW Graham with honors and have always excelled
            in and been interested by the field of math. I have won various awards for my abilities,
            most recently including first place in the UFV section of the BC Secondary Schools Math Contest.
            I want to help others find the same fascination with the subject that I have.
            <div className={styles.break} />
            In all my classes, I have been known as the person my classmates turn to when they
            need a bit of help understanding something. I have frequently helped others through
            some of the tougher concepts in math and other subjects, and in doing so I have found
            a passion for tutoring and helping others achieve their academic goals.
            <div className={styles.break} />
            When I'm not tutoring, I enjoy computer programming. Writing code takes a strong sense
            of logical reasoning, which has helped me both when understanding math and when
            finding new and creative ways to teach and explain it. I believe that any difficult
            concept is just one fresh perspective away from seeming obvious, and I aim to find
            the unique perspective that works for every student.
            <div className={styles.break} />
            I'm excited to help your child succeed!
            <div className={styles.break} />

          </div>
          <img src={tutorphoto} className={styles.image} alt="Nathan Strong" />
        </div>
        <a className={gStyles.button} href='#/contact'>Contact Me</a>
      </div>
      <Footer />
    </>
  );
}

const useStyles = createUseStyles({
  break: {
    height: '1rem'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    "@media (pointer:coarse)": {
      flexDirection: 'column-reverse',
    },
    marginBottom: 20,
    gap: 30,
  },
  about: {
  },
  image: {
    width: '40vw',
    maxWidth: '50%',
    "@media (pointer:coarse)": {
      width: '60vw',
      maxWidth: '100%',
    }
  }
})

export default About;