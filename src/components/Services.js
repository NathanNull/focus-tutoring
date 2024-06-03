import Header from './Header';
import { useGlobalStyles } from '../styles';

function Services() {
  const gStyles = useGlobalStyles();
  return (
    <>
      <Header>
        <div className={gStyles.titleText}>Services</div>
      </Header>
      <div className={gStyles.content}>
        The things I offer, and pricing (pricing maybe goes somewhere else.)
      </div>
    </>
  );
}

export default Services;