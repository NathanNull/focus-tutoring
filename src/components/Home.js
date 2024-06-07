import { createUseStyles } from 'react-jss';
import Header from './Header.js';
import { useGlobalStyles } from '../styles.js';
import Footer from './Footer.js';

function Home() {
    const styles = useStyles();
    const gStyles = useGlobalStyles();
    return (
        <>
            <Header long_hero_section={true}>
                <div className={styles.header}>Personalized math tutoring to help your child excel</div>
                <div className={gStyles.titleText} style={{ textTransform: 'none', fontFamily: 'sans-serif' }}>
                    Focus Tutoring
                </div>
                <a href="#/services" className={gStyles.button}>Learn More</a>
            </Header>
            <div className={gStyles.content}>
                <div className={gStyles.header} style={{ marginBottom: '0.5rem'}}>Chilliwack Math Tutoring Services</div>
                <div className={gStyles.subheader} style={{ marginBottom: '1rem'}}>
                    All tutoring plans are personalized to fit the needs of the student
                </div>
                Welcome to Focus Tutoring, the newest improvement to your mathematics education. We offer one-on-one
                tutoring customized to your child's learning needs and preferences, to ensure that they reach their
                academic goals.
                <br/><br/>
                Tutoring is available for any kind of math taught in grades 6-12, from times tables to calculus.
                <br/><br/>
                <a className={gStyles.button} href='#/services'>Find Out More</a>
                <br/><br/>

                <div className={gStyles.header} style={{ marginBottom: '1rem', marginTop: '3rem'}}>How It Works</div>
                <div className={gStyles.subheader} style={{ marginBottom: '0.5rem'}}>
                    1. Contact Us
                </div>
                Reach out using our <a href='#/contact' className={gStyles.link}>contact form</a> or at
                focustutoringfv@gmail.com.
                <div className={gStyles.subheader} style={{ marginBottom: '0.5rem', marginTop: '1rem'}}>
                    2. Assessment
                </div>
                Book a free appointment to assess your child's needs and goals.
                <div className={gStyles.subheader} style={{ marginBottom: '0.5rem', marginTop: '1rem'}}>
                    3. Customized Tutoring
                </div>
                Begin tutoring sessions, personalized for your child's learning style.

                <br/><br/><br/><br/>
                <a className={gStyles.button} href='#/contact'>Get Started Today</a>
            </div>
            <Footer />
        </>
    );
}

const useStyles = createUseStyles({
    header: {
        fontSize: 25,
        color: 'gray',
        textTransform: 'uppercase',
        fontWeight: 100,
        fontFamily: 'monospace',
        textAlign: 'center'
    }
})

export default Home;