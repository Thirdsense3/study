import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { Fragment } from 'react';
import CompareTable from '../../elements/widgets/comparetable/CompareTable'

export default function Compare(){

    return(
        <Fragment>
            <Header/>
            <CompareTable               
            ></CompareTable>
            <Footer/>
        </Fragment>
    );
}