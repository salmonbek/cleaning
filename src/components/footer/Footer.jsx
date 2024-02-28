import "./Footer.scss";
import Logo from "../../assets/images/logo.png";
import Frame from "../../assets/images/Frame.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-items">
            <h2>Quality cleaning for your home</h2>
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <img src={Frame} alt="frame" />
          </div>
          <div className="footer-top-items2">
            <h2>Contact us</h2>
            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
            <p>(414) 567 - 2109</p>
            <p>contact@cleaning.com</p>
          </div>
          <div className="footer-top-items3">
            <h1>Hours</h1>
            <h2>Monday to Friday </h2>
            <h3>6:00 AM - 9:00 PM</h3>
            <h2>Saturday & Sunday</h2>
            <h3>8:00 AM - 8:00 PM</h3>
          </div>
          <div className="footer-top-items4">
            <h3>Get a free estimate</h3>
            <h4>(414) 567 - 2109</h4>
            <p>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <button>Request a free quote</button>
          </div>
        </div>
        <hr className="hr" />
        <div className="footer-bootom">
          <div className="logo">
            <img src={Logo} alt="#" />
          </div>
          <div className="left">
            <p>Copyright © Cleaning X | Designed by</p>
            <a href="">BRIX Templates</a>
            <p>- Powered by</p>
            <a href="#">Webflow</a>
            <a href="#">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
