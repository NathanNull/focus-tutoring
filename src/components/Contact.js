import { createUseStyles } from 'react-jss';

function Contact() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.test}>Contact</div>
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

export default Contact;