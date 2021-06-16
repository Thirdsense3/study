import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Wishtable() {
  const [wishDatas, setWishDatas] = useState([]);

  let process = require('../../../../myProcess.json');

  useEffect(() => {
    fetch(`http://${process.IP}:${process.PORT}/wish`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWishDatas(data);
        console.log(data);
      });
  }, [process.IP, process.PORT]);

  const handleDelete = (id) => {
    fetch(`http://${process.IP}:${process.PORT}/wish/${id}`, {
      method: 'DELETE',
    }).then(
      alert('삭제되었습니다.'),
      fetch(`http://${process.IP}:${process.PORT}/wish`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setWishDatas(data);
          console.log(data);
        }),
    );
  };

  const wishTableList = wishDatas.map((item, index) => (
    <tr key={index}>
      <td class="product-thumbnail">
        <Link to={`/productdetail/${item.id}`}>
          <img class="img-fluid" src={item.image[0]} alt="" />
        </Link>
      </td>
      <td class="product-name text-center">
        <Link to={`/productdetail/${item.id}`}>{item.name}</Link>
      </td>
      <td class="product-price-cart">
        <span class="amount old">{item.price}</span>
        <span class="amount">
          {(item.price * ((100 - item.discount) / 100)).toFixed(2)}
        </span>
      </td>
      <td class="product-wishlist-cart">
        <Link to={`/productdetail/${item.id}`}>Select option</Link>
      </td>
      <td class="product-remove">
        <button onClick={() => handleDelete(item.id)}>
          <i class="fa fa-times"></i>
        </button>
      </td>
    </tr>
  ));

  return (
    <div class="cart-main-area pt-90 pb-100">
      <div class="container">
        <h3 class="cart-page-title">Your wishlist items</h3>
        <div class="row">
          <div class="col-12">
            <div class="table-content table-responsive cart-table-content">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Add To Cart</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>{wishTableList}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="cart-shiping-update-wrapper">
              <div class="cart-shiping-update">
                <a href="/shop-grid-standard">Continue Shopping</a>
              </div>
              <div class="cart-clear">
                <button>Clear Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
