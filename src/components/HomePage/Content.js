import "./HomePage.css";

const Content = (props) => {
  return (
    <div className="content-main-container">
      <div className="content-title-con">
        <h1 className="content-title" id="products">
          Products
        </h1>
      </div>

      <div className="products-list-con">
        {props.product_title.map((item, i) => {
          return (
            <div className="products-card">
              <img
                className="product-img"
                src={`${props.product_img[i]}`}
                alt="img"
              ></img>
              <div className="product-dtls">
                <h3 className="product-title">{item.split("-").join(" ")}</h3>
                <h4 className="product-price">
                  Price :<h3>{props.product_price[i]}</h3>
                </h4>
                <div className="product-btn">
                  <a className="product-buynow" href="#buy">
                    Buy
                  </a>
                  <a className="product-cart" href="#cart">
                    Cart <i className="bi bi-cart4"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
