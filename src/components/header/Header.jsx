import "./Header.scss";
import Logo from "../../assets/images/logo.png";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav-list">
            <a href="">
              <img src={Logo} alt="" />
            </a>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item__link">
                Home
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item__link">
                About
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item__link">
                Services
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item__link">
                Articles
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item__link">
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-flex">
            {" "}
            <p className="nav-flex-description">Cart ( 0 )</p>
            <button className="nav-flex-btn"> Get a free quote</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
