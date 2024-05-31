import { createUseStyles } from 'react-jss';

function Services() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.test}>Services</div>
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

export default Services;