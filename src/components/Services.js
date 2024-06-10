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
        <div className={gStyles.header} style={{ marginBottom: '0.5rem' }}>Services Offered</div>
        We offer homework help as well as catch-up and work-ahead lessons, with flexible scheduling.
        <br/><br/>
        We will tutor any level of math between grades 6 and 12. Lower grades may be accepted on a case-by-case basis.
        <div className={gStyles.header} style={{ marginBottom: '0.5rem', marginTop: '2rem' }}>Recommended Sessions</div>
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