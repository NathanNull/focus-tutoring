import { createUseStyles } from 'react-jss';

const useGlobalStyles = createUseStyles({
    titleText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'monospace',
        textTransform: 'uppercase',
        fontWeight: 200,
        fontSize: 100,
        '@media (pointer:coarse)': {
            fontSize: 50,
        },
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: ['10vh', '20vw'],
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subheader: {
        fontSize: 25,
        fontWeight: 'lighter',
    },
    button: {
        textAlign: 'center',
        color: 'grey',
        fontFamily: 'monospace',
        textTransform: 'uppercase',
        fontSize: 30,
        '@media (pointer:coarse)': {
            fontSize: 20,
        },
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
    link: {
        textAlign: 'center',
        color: 'grey',
        '&:hover': {
            color: 'lightgrey',
        },
    }
});

export { useGlobalStyles }