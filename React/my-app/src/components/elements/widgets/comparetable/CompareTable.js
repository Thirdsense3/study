import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Rating from '../../ui/Rating'

export default function CompareTable(){

    const [compareDatas,setCompareDatas] = useState([])

    let process = require('../../../../myProcess.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/compare`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCompareDatas(data);
            console.log(data);
        });
    },[process.IP, process.PORT]);

    const handleDelete = (id) =>{
        fetch(`http://${process.IP}:${process.PORT}/compare/${id}`, {
            method : "DELETE"
        }).then(
            alert("삭제되었습니다."),
            fetch(`http://${process.IP}:${process.PORT}/compare`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCompareDatas(data);
                console.log(data);
            })
        )
    }

    const compareTableList = compareDatas.map((item, index) => (
        <td class="product-image-title">
            <div class="compare-remove">
                <button
                    onClick={()=>handleDelete(item.id)}
                ><i class="las la-trash"></i></button>
            </div>
            
            <Link to = {`/productdetail/${item.id}`}><img class="img-fluid" src="assets/img/product/fashion/2.jpg" alt=""/></Link>
            <div class="product-title">
                <Link to = {`/productdetail/${item.id}`}>{item.name}</Link>
            </div>
            
            <div class="compare-btn">                
                <Link to = {`/productdetail/${item.id}`}>Select Option</Link>
            </div>
        </td> 
    )).slice(0,3)

    const compareTableList2 = compareDatas.map((item,index) =>(
        <td class="product-price">
            <span class="amount old">${item.price}</span>
            <span class="amount">{(item.price * ((100-item.discount)/100)).toFixed(2)}</span>
        </td>
    )).slice(0,3)

    const compareTableList3 = compareDatas.map((item,index) =>(
        <td class="product-desc">
            <p>
                ${item.shortDescription}
            </p>
        </td>
    )).slice(0,3)

    const compareTableList4 = compareDatas.map((item,index)=>(
        <td class="product-rating">            
            {item.rating && item.rating > 0 ? (
                    <Rating ratingValue={item.rating} />
                ) : (
                ""
            )}
        </td>
    )).slice(0,3)

    return(
        <div class="compare-main-area pt-90 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="compare-page-content">
                        <div class="compare-table table-responsive">
                            <table class="table table-bordered mb-0">
                                <tbody>
                                    <tr>
                                        <th class="title-column">Product Info</th>          
                                        {compareTableList}             
                                    </tr>
                                    <tr>
                                        <th class="title-column">Price</th>
                                        {compareTableList2}
                                    </tr>
                                    <tr>
                                        <th class="title-column">Description</th>
                                        {compareTableList3}
                                    </tr>
                                    <tr>
                                        <th class="title-column">Rating</th>
                                        {compareTableList4}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}