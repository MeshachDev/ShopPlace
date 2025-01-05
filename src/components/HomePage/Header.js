import "./HomePage.css";


const Header = (props) => {

  return (
    <div className="header-main-container">
      <a className="header-a" href="#home">
        <h1 className="header-title">{props.header_title}</h1>
      </a>

      <div className="search-con">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search....."
        ></input>
        <i className="bi bi-search"></i>
      </div>

      <div className="nav-list-con">
        <a className="nav-list" id="1" href="#products">
          Products
        </a>
        <a className="nav-list" id="2" href="#contact-us">
          Contact Us
        </a>
        <a className="nav-list" id="3" href="#cart">
        <i className="bi bi-cart4"></i>
        </a>
        <a className="nav-list" id="login-btn" href="#login">
          Login
        </a>
        <a className="nav-list" id="profile" href="#profile">
          <i className="bi bi-person-bounding-box"></i>
        </a>
      </div>
      <a className="nav-list" id="min-cart" href="#cart">
        <i className="bi bi-cart4"></i>
        </a>
        <a className="nav-list" id="min-profile" href="#profile">
          <i className="bi bi-person-bounding-box"></i>
        </a>
      <div className="navbar">
      <i className="bi bi-list"></i>
      </div>
    </div>
  );
};

export default Header;
