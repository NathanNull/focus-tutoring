import { createUseStyles } from 'react-jss';
import Header from './Header.js';
import { useGlobalStyles } from '../styles.js';

function Home() {
    const styles = useStyles();
    const gStyles = useGlobalStyles();
    return (
        <>
            <Header>
                <div className={gStyles.titleText}>
                    you need tutor? <br /> is me <br /> pick a better font
                </div>
                <a href="#/about" className={styles.learnMoreButton}>Learn More</a>
            </Header>
            <div className={gStyles.content}>
                I'll put some text here that talks about what I do
            </div>
        </>
    );
}

const useStyles = createUseStyles({
    learnMoreButton: {
        textAlign: 'center',
        color: 'grey',
        fontFamily: 'monospace',
        textTransform: 'uppercase',
        fontSize: 30,
        textDecoration: 'none',
        padding: 10,
        marginTop: 10,
        border: {
            color: 'grey',
            width: 2,
            style: 'solid',
        },
        '&:hover': {
            backgroundColor: 'grey',
            color: 'white',
        },
    },
})

export default Home;