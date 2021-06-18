import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import MyAccountForm from './MyAccountForm';

export default function MyAccount() {
  return (
    <>
      <Header />
      <Bread productName="My Account" />
      <MyAccountForm />
      <Footer />
    </>
  );
}
