import "./HomePage.css";

const Banner = (props) => {
  return (
    <div className="banner-main-container">
      <div className="banner-content-box">
        <h1 className="banner-title">Shop Place</h1>
        <p className="banner-content-text">
          A place to get your antenna designed and fabricated on the go.
        </p>
      </div>
    <div className="shop-btn-con">
    <a className="shop-btn" href="#products">
        Shop
      </a>
    </div>
    </div>
  );
};

export default Banner;
