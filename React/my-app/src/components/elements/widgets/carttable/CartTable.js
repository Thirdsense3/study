import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartListView from '../../ui/CartListView';

export default function Cartable() {
  const [cartDatas, setCartDatas] = useState([]);

  let process = require('../../../../myProcess.json');

  useEffect(() => {
    fetch(`http://${process.IP}:${process.PORT}/cart`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCartDatas(data);
        console.log(data);
      });
  }, [process.IP, process.PORT]);

  const handleDelete = (id) => {
    fetch(`http://${process.IP}:${process.PORT}/cart/${id}`, {
      method: 'DELETE',
    }).then(
      alert('삭제되었습니다.'),
      fetch(`http://${process.IP}:${process.PORT}/cart`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCartDatas(data);
          console.log(data);
        }),
    );
  };

  const cartTableList = cartDatas.map((item, index) => (
    <tr key={index}>
      <td class="product-thumbnail">
        <Link to={`/productdetail/${item.id}`}>
          <img
            class="img-fluid"
            src="assets/img/product/fashion/2.jpg"
            alt=""
          />
        </Link>
      </td>

      <td class="product-name">
        <Link to={`/productdetail/${item.id}`}>{item.name}</Link>
        <div class="cart-item-variation">
          <span>Color: blue</span>
          <span>Size: x</span>
        </div>
      </td>

      <td class="product-price-cart">
        <span class="amount old">{item.price}</span>
        <span class="amount">
          {(item.price * ((100 - item.discount) / 100)).toFixed(2)}
        </span>
      </td>

      <td class="product-quantity">
        <div class="cart-plus-minus">
          <button class="dec qtybutton">-</button>
          <input
            class="cart-plus-minus-box"
            type="text"
            readonly=""
            value="1"
          />
          <button class="inc qtybutton">+</button>
        </div>
      </td>

      <td class="product-subtotal">$15.72</td>
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
        <h3 class="cart-page-title">Your cart items</h3>
        <div class="row">
          <div class="col-12">
            <div class="table-content table-responsive cart-table-content">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {cartTableList} */}
                  {
                    cartDatas.map(item=>(
                      <CartListView
                      data = {item} />
                    ))
                  }
                  </tbody>
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
                <button>Clear Shopping Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="cart-tax">
              <div class="title-wrap">
                <h4 class="cart-bottom-title section-bg-gray">
                  Estimate Shipping And Tax
                </h4>
              </div>
              <div class="tax-wrapper">
                <p>Enter your destination to get a shipping estimate.</p>
                <div class="tax-select-wrapper">
                  <div class="tax-select">
                    <label>* Country</label>
                    <select class="email s-email s-wid">
                      <option>Bangladesh</option>
                      <option>Albania</option>
                      <option>Åland Islands</option>
                      <option>Afghanistan</option>
                      <option>Belgium</option>
                    </select>
                  </div>
                  <div class="tax-select">
                    <label>* Region / State</label>
                    <select class="email s-email s-wid">
                      <option>Bangladesh</option>
                      <option>Albania</option>
                      <option>Åland Islands</option>
                      <option>Afghanistan</option>
                      <option>Belgium</option>
                    </select>
                  </div>
                  <div class="tax-select">
                    <label>* Zip/Postal Code</label>
                    <input type="text" />
                  </div>
                  <button class="cart-btn-2" type="submit">
                    Get A Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="discount-code-wrapper">
              <div class="title-wrap">
                <h4 class="cart-bottom-title section-bg-gray">
                  Use Coupon Code
                </h4>
              </div>
              <div class="discount-code">
                <p>Enter your coupon code if you have one.</p>
                <form>
                  <input type="text" required="" name="name" />
                  <button class="cart-btn-2" type="submit">
                    Apply Coupon
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="grand-totall">
              <div class="title-wrap">
                <h4 class="cart-bottom-title section-bg-gary-cart">
                  Cart Total
                </h4>
              </div>
              <h5>
                Total products <span>$73.13</span>
              </h5>
              <h4 class="grand-totall-title">
                Grand Total <span>$73.13</span>
              </h4>
              <a href="/checkout">Proceed to Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
