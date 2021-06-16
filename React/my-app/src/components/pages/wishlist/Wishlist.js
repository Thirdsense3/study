import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { Fragment } from 'react';
import WishTable from '../../elements/widgets/wishtable/WishTable';

export default function Wishlist() {
  return (
    <Fragment>
      <Header />
      <WishTable />
      <Footer />
    </Fragment>
  );
}
