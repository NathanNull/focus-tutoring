import Header from './Header';
import { useGlobalStyles } from '../styles';
import { createUseStyles } from 'react-jss';
import Footer from './Footer';

function About() {
  const gStyles = useGlobalStyles();
  const styles = useStyles();
  return (
    <>
      <Header>
        <div className={gStyles.titleText}>Meet the Tutor</div>
      </Header>
      <div className={gStyles.content}>
        <div className={gStyles.header}>Nathan Strong</div>
        <div className={gStyles.subheader}>Tutor</div>
        Hi! I'm Nathan, a recent high school graduate with a passion for helping others
        succeed academically. I graduated from GW Graham with honors and have always excelled
        in and been interested by the field of math, and I want to help others find the same
        fascination with the subject that I have.
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
        I'm excited to help you or your child succeed!
        <div className={styles.break} />
        <a className={gStyles.button} href='#/contact'>Contact Me</a>
      </div>
      <Footer />
    </>
  );
}

const useStyles = createUseStyles({
  break: {
    height: '1rem'
  }
})

export default About;