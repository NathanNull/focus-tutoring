import Header from './Header';
import { useGlobalStyles } from '../styles';
import Footer from './Footer';

function Services() {
  const gStyles = useGlobalStyles();
  return (
    <>
      <Header>
        <div className={gStyles.titleText}>Services</div>
      </Header>
      <div className={gStyles.content}>
        <div className={gStyles.header} style={{ marginBottom: '0.5rem' }}>Recommended Sessions</div>
        Two 2-hour sessions per week are recommended, though more or less
        can be accommodated according to need.
        <div className={gStyles.header} style={{ marginBottom: '0.5rem', marginTop: '2rem' }}>Pricing</div>
        A 2-hour session is $60. Other session lengths are at the same rate,
        $30/hr.
      </div>
      <Footer />
    </>
  );
}

export default Services;