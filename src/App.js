import {createUseStyles} from 'react-jss';

function App() {
  const styles = useStyles();
  return (
    <div className={styles.test}>Hey guys check out my cool website</div>
  );
}

const useStyles = createUseStyles({
  test: {
    color: "blue",
    fontWeight: 'bolder',
    fontSize: 50
  }
})

export default App;