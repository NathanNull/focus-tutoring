import { createUseStyles } from 'react-jss';

const useGlobalStyles = createUseStyles({
    titleText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'monospace',
        textTransform: 'uppercase',
        fontWeight: 200,
        fontSize: 100
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: ['10vh', '30vw'],
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subheader: {
        fontSize: 20,
        fontWeight: 'lighter',
    },
    button: {
        background: 'black',
        color: 'white',
        borderStyle: 'none',
        fontSize: 30,
        padding: [10, 20],
        textDecoration: 'none',
    }
})

export { useGlobalStyles }