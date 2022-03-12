import { useEffect, useState } from "react";
import "./home.css";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log("res", res);
        });
    } catch (er) {}
  };

  return (
    <div id="home_container">
      <div id="top">
        <p id="heading">All deals and coupons</p>
        <p id="sentence">
          The best online deals and coupons, including Klarna exclusives,
          updated daily.
        </p>
      </div>

      <div id="bottom">
        <div id="bottom_left">
          <div>
            <p id="category">Categories</p>
            <p className="category">All</p>
            <p className="category">Babies & Kids</p>
            <p className="category">Clothing & Apparel</p>
            <p className="category">Computers & Accessories</p>
            <p className="category">Consumer Electronics</p>
            <p className="category">Education</p>
            <p className="category">Gifts</p>
            <p className="category">Health & Beauty</p>
            <p className="category">Holidays & Occasions</p>
            <p className="category">Household</p>
            <p className="see_all">
              <u>See all 14</u>
            </p>
          </div>
          <div>
            <p id="filter">Filter</p>
            <p className="type_discount">Type</p>
            <div>
              <div>
                <input className="inputs" type="checkbox"></input>
                <label className="labels" for="">
                  Only Coupons
                </label>
              </div>
              <div>
                <input className="inputs" type="checkbox"></input>
                <label className="labels" for="">
                  Exclusives
                </label>
              </div>
              <div>
                <input className="inputs" type="checkbox"></input>
                <label className="labels" for="">
                  BOGO and more
                </label>
              </div>
            </div>
            <hr></hr>

            <p className="type_discount">Discount</p>
            <div>
              <div>
                <input className="inputs" type="checkbox"></input>
                <label className="labels" for="">
                  0-49% off
                </label>
              </div>
              <div>
                <input className="inputs" type="checkbox"></input>
                <label className="labels" for="">
                  50-80% off
                </label>
              </div>
            </div>

            <hr></hr>
          </div>
        </div>

        <div id="bottom_right">
          <input id="search_box" type="text" placeholder="Search"></input>
          <hr></hr>
          <div id="total_item">
            <p>20 items</p>
            <p>Featured</p>
          </div>
          <div id="all_products">
            {data.map((e, i) => (
              <div className="product_container">
                <img className="product_image" src={e.image} alt="#"></img>
                <p className="product_name">
                  <b>{e.title}</b>
                </p>
                <p>₹{e.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
