import { createUseStyles } from 'react-jss';

function About() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.test}>About</div>
    </>
  );
}

const useStyles = createUseStyles({
  test: {
    color: "blue",
    fontWeight: 'bolder',
    fontSize: 50
  }
})

export default About;