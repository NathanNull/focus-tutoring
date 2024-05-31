import { createUseStyles } from 'react-jss';
import classroomImage from '../assets/classroom.jpg';

console.log(classroomImage)

function Home() {
    const styles = useStyles();
    return (
        <>
            <div className={styles.homeView}>
                <div className={styles.titleText}>
                    you need tutor? <br /> is me <br/> pick a better font
                </div>
                <a href="#/about" className={styles.learnMoreButton}>Learn More</a>
            </div>
            <div className={styles.content}>
                I'll put some text here that talks about what I do
            </div>
        </>
    );
}

const useStyles = createUseStyles({
    homeView: {
        // Tint the image with a gradient of blacks
        backgroundImage: ['linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.5))', `url(${classroomImage})`],
        backgroundSize: 'cover',
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'monospace',
        textTransform: 'uppercase',
        fontWeight: 'bolder',
        fontSize: 50
    },
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
    content: {
        fontSize: 30,
        textAlign: 'center',
        padding: 100,
        fontFamily: 'sans-serif'
    }
})

export default Home;