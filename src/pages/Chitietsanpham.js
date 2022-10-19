import React from "react";
import "../CSS/chitiet.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CtxCart } from "../App";

const Chitietsanpham = () => {
  const [infoProduct, setInfoProduct] = useState({});
  const [count, setCount] = useState(1);
  const cart = useContext(CtxCart);
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://633ae702e02b9b64c61a63ba.mockapi.io/api/v1/quanao/` + params.id
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfoProduct(data);
      });
  }, []);
  const onChangeCount = (e) => {
    setCount(e.target.value);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    // const i = cart.cart1.map((item) => {
    //   if (item.id === infoProduct.id && item.count > count) {
    //     item.count -= parseInt(count);
    //   }
    //   return item;
    // });
    // cart.setCart(i);
    // localStorage.setItem("cart", JSON.stringify(i));
    setCount(count - 1);
  };
  const handleButtonCard = () => {
    const i = cart.cart1.map((item) => {
      if (item.id === infoProduct.id && item.count > count) {
        item.count += parseInt(count);
      }
      return item;
    });
    cart.setCart(i);
    localStorage.setItem("cart", JSON.stringify(i));
  };
  return (
    <div className="product-detail">
      <div className="grid">
        <div className="hero-content">
          <h1>Thông tin sản phẩm</h1>
        </div>
        <div className="product_ct1">
          {/* html render */}
          <div className="product-slide">
            <img className="product-img" src={infoProduct.hinhanh} alt="sp" />
          </div>
          <div className="product-infomation">
            <div className="product-title">
              <h1>{infoProduct.tensp}</h1>
            </div>
            <span
              style={{ color: "rgb(122, 122, 122)" }}
              className="product-id"
            >
              Mã sản phẩm:{infoProduct.id}
            </span>
            <div className="pro-price">
              <h3>{infoProduct.gia} VNĐ</h3>
            </div>
            <form
              id="add-item-form"
              className="add-item-form"
              name="variant-form"
            >
              <div className="quantity-area">
                <input
                  id="reduce-quantity-btn"
                  type="button"
                  defaultValue="-"
                  className="change-quantity-btn"
                  onClick={handleDecrease}
                />
                <input
                  id="quantity"
                  min={1}
                  type="text"
                  value={count}
                  onChange={onChangeCount}
                />
                <input
                  id="raise-quantity-btn"
                  type="button"
                  defaultValue="+"
                  className="change-quantity-btn"
                  onClick={handleIncrease}
                />
              </div>
              <div className="underline">
                <button
                  type="button"
                  id="add-product-to-cart"
                  className="hero-btn-full"
                  onClick={handleButtonCard}
                >
                  THÊM VÀO GIỎ
                </button>
                <button
                  id="add-product-to-cart"
                  className="hero-btn-full"
                  type="submit"
                >
                  MUA HÀNG
                </button>
              </div>
            </form>
            <div className="description-section section">
              <h3>Mô tả</h3>
              <ul>
                <li className="mota-sp">{infoProduct.mota}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chitietsanpham;
