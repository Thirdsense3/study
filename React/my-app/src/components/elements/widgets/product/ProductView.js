import React, {useState} from 'react';
import {Link} from "react-router-dom";
import productData from '../../../../db/product.json';
import Rating from '../../ui/Rating';

export default function ProductView({categoryName}){

    const [newData, setnewData] = useState(productData);

    const searchData = categoryName
    ? newData.filter(
        item => item.category.filter(single => single === categoryName)[0]
      )
    : newData;
    
    // const searchData = newData.filter(index => (
    //    index.category[0] === categoryName || index.category[1] === categoryName || index.category[2] === categoryName
    // ))
    const productList = searchData.map(item => (
        
            <div className="col-12 col-md-3 mb-4" key={item.id}>
                <Link to={`/producdetail/${item.id}`}>
                    <div className="productImg">{item.category}</div>
                </Link>
                <p className="productTitle">{item.name}</p>
                <p className="productScore">
                {item.rating && item.rating > 0 ? (
                    <Rating ratingValue={item.rating} />
                ) : (
                ""
                )}
                </p>
                <p className="productPrice">${(item.price * ((100-item.discount)/100)).toFixed(2)}<span>${item.price}</span></p>
            </div>

    )).slice(0,8);

    return(
        <div className="row mt-5">
            {productList}
        </div>
        
    );
}