import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import { Fragment } from 'react';
import CartTable from '../../elements/widgets/carttable/CartTable';

export default function Cart() {
  return (
    <Fragment>
      <Header />
      <Bread productName="Cart"></Bread>
      <CartTable></CartTable>
      <Footer />
    </Fragment>
  );
}
