import React from 'react'
import Header from '../../layout/Header';
import Brand from '../../elements/widgets/brand/Brand';
import Deal from '../../pages/deal/Deal';
import Blog from '../blog/Blog'
import Footer from '../../layout/Footer';

export default function Home() {
    return(
        <div id="wrap">
            <Header/>
            <Brand />
            <Deal />
            <Blog/>
            <Footer></Footer>
        </div>
    )
}