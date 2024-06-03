import Header from './Header';
import { useGlobalStyles } from '../styles';

function About() {
  const gStyles = useGlobalStyles();
  return (
    <>
      <Header>
        <div className={gStyles.titleText}>About</div>
      </Header>
      <div className={gStyles.content}>
        Some text here about who I am
      </div>
    </>
  );
}

export default About;