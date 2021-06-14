import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function ProductDetail() {

    const { id } = useParams();
    const [ productData , setProductData ] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3005/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProductData(data);
        });
    },[id]);

    console.log(productData);

    const productContent = productData.map(item => {
        <div key={item.id} class="container">
        <div class="row">
            <div class="col-xl-3 col-md-6 col-lg-4 co   l-sm-6 ">
                <div class="product-wrap mb-25">
                    <div class="product-img">
                        <a href="/product/8">
                            <img class="default-img" src="assets/img/product/fashion/8.jpg" alt=""/>
                            <img class="hover-img" src="/assets/img/product/fashion/6.jpg" alt=""/>
                        </a>
                        
                        <div class="product-img-badges">
                            <span class="pink">{item.discount}</span>
                            <span class="purple">new</span>
                        </div>
                    </div>
                    
                    <div class="product-action">
                        <div class="pro-same-action pro-wishlist">
                            <button class="" title="Add to wishlist"><i class="las la-bookmark"></i></button>
                        </div>
                        
                        <div class="pro-same-action pro-cart">
                            <button disabled="" class="active">Out of Stock</button>
                        </div>
                        
                        <div class="pro-same-action pro-quickview">
                            <button title="Quick View"><i class="las la-eye"></i></button>
                        </div>
                    </div>
                </div>
                
                <div class="product-content text-center">
                    <h3><a href="/product/8">Lorem ipsum fashion jacket</a></h3>
                    
                    <div class="product-rating">
                        <i class="fas fa-star yellow"></i>
                        <i class="fas fa-star yellow"></i>
                        <i class="fas fa-star yellow"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    
                    <div class="product-price">
                        <span>$26.87</span> 
                        <span class="old">$29.85</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    });


    return (
        <Fragment>
            <Header/>
            {productContent}
            <Footer />
        </Fragment>
    );
}