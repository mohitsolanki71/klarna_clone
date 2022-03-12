import "./navbar.css";

export const Navbar = () => {
  return (
    <div id="navbar_container">
      <div id="right_icons">
        <div id="image_icon">
          <img src="https://github.com/mohitsolanki71/portfolio_images/blob/main/klarna/Screenshot%20(1871).png?raw=true"></img>
        </div>
        <div id="menu_icons">
          <p>Shop</p>
          <p>How it works</p>
          <p>Pay in 4</p>
          <p>The shopping App</p>
          <p>Help</p>
        </div>
      </div>

      <div id="left_icons">
        <button className="button_login">Log in</button>
        <button className="button_getapp">Get the app</button>
      </div>
    </div>
  );
};
