import { useState } from "react";
import "./navbar.css";

export const Navbar = () => {
  const [value, setValue] = useState(false);

  const handleDropDown = () => {
    setValue(true);
  };
  const handleDropDownLeave = () => {
    setValue(false);
  };

  return (
    <div>
      <div id="navbar_container">
        <div id="right_icons">
          <div id="image_icon">
            <img src="https://github.com/mohitsolanki71/portfolio_images/blob/main/klarna/Screenshot%20(1871).png?raw=true"></img>
          </div>
          <div id="menu_icons">
            <p onMouseOver={handleDropDown}>Shop</p>
            <p>How it works</p>
            <p>Pay in 4</p>
            <p>The shopping App</p>
            <p>Help</p>
          </div>
        </div>

        <div id="left_icons">
          <button className="button_login">Log in</button>
          <button className="button_getapp">Get the app</button>
          <p id="menu_symbol">☰</p>
        </div>
      </div>
      {value ? (
        <div id="dropdown_menu" onMouseLeave={handleDropDownLeave}>
          <div id="dropdown_part1">
            <p>Deals</p>
            <p>Trends</p>
            <p>Klarna stores</p>
            <p>Browser extensions</p>
            <p>In-store</p>
            <p>Rewards club</p>
          </div>

          <div id="dropdown_part2">
            <p className="category_store">Categories</p>
            <p className="category_text">Auto</p>
            <p className="category_text">Beauty</p>
            <p className="category_text">Black owned businesses</p>
            <p className="category_text">Clothes and fashion</p>
            <p className="category_text">Electronics</p>
            <p className="category_text">Home</p>
            <p className="category_text">Luxury</p>
            <p className="category_text">Toys & entertainment</p>
          </div>

          <div id="dropdown_part3">
            <p className="category_store">Featured stores</p>
            <div className="stores">
              <img
                src="https://www.klarna.com/assets/sites/2/2021/05/26113001/Bed-Bath.jpg"
                alt="#"
              ></img>
              <p>Bed Bath & Beyond</p>
            </div>
            <div className="stores">
              <img
                src="https://www.klarna.com/assets/sites/2/2021/04/15203242/Macys.jpg"
                alt="#"
              ></img>
              <p>Bed Bath & Beyond</p>
            </div>
            <div className="stores">
              <img
                src="https://www.klarna.com/assets/sites/2/2021/04/15203239/Sephora.jpg"
                alt="#"
              ></img>
              <p>Bed Bath & Beyond</p>
            </div>
            <div className="stores">
              <img
                src="https://www.klarna.com/assets/sites/2/2021/04/15203237/HM.jpg"
                alt="#"
              ></img>
              <p>Bed Bath & Beyond</p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
