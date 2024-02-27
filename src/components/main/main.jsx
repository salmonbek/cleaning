import "./Main.scss";
import Call from "../../assets/images/call-icon.png";
import Right from "../../assets/images/hero-right-img.png";
import About1 from "../../assets/images/about-card1.png";
import About2 from "../../assets/images/about-card2.png";
import About3 from "../../assets/images/about-card3.png";
import Services1 from "../../assets/images/service1.png";
import Services2 from "../../assets/images/service2.png";
import Services3 from "../../assets/images/service3.png";
import Covid from "../../assets/images/covid-left.png";
import Article1 from "../../assets/images/article-left.png";
import Article2 from "../../assets/images/article-right.png";
import Frame from "../../assets/images/square-blue.png";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="container ">
          <div className="hero-left">
            <h1 className="hero-left-title">Quality cleaning for your home</h1>
            <p className="hero-left-p">
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="hero-left-flex">
              <button className="nero-left-flex__btn">Get a free quote</button>
              <div className="hero-left-flex__f">
                <img src={Call} alt="call" />
                <div>
                  <p className="hero-left-flex__f__p1">Call us now</p>
                  <p className="hero-left-flex__f__p2">(414) 567 - 2109</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src={Right} alt="hero-right-img" />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about-top">
            <h1>About Us</h1>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
          </div>
          <div className="about-card">
            <div className="about-card-item">
              <img src={About1} alt="card1" />
              <h4>1. Schedule online</h4>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
            <div className="about-card-item">
              <img src={About2} alt="card1" />
              <h4>2. Pay online easily</h4>
              <p>
                Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                amet at nunc.
              </p>
            </div>
            <div className="about-card-item">
              <img src={About3} alt="card1" />
              <h4>3. Get your house cleaned</h4>
              <p>
                Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                cursus eleifend.
              </p>
            </div>
          </div>
          <div className="about-btn">
            <butoon className="about-btn__b1">Get a free quote</butoon>
            <butoon className="about-btn__b2">Explore services</butoon>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <div className="service-top">
            <h1>Our Services</h1>
            <button>Explore services</button>
          </div>
          <div className="service-card">
            <div className="service-card-items">
              <img src={Services1} alt="" />
              <h4>House cleaning</h4>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="service-card-items2">
              <img src={Services2} alt="" />
              <h4>Office cleaning</h4>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="service-card-items3">
              <img src={Services3} alt="" />
              <h4>Industrial cleaning</h4>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="covid">
        <div className="container">
          <div className="covid-area">
            <div className="covid-area-left">
              <img src={Covid} alt="covid-img" />
            </div>
            <div className="covid-area-right">
              <h5>Covid-19 sanitization</h5>
              <h1>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h1>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="covid-area-right__flex">
                <button className="btn">Get a free quote</button>
                <div className="covid-area-right__flex__2">
                  <img src={Call} alt="call-icon" />
                  <div>
                    <p>Call us now</p>
                    <h4>(414) 567 - 2109</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="articles">
        <div className="container">
          <div className="articles-top">
            <h1>Articles & resources</h1>
            <div className="articles-top-btns">
              <button className="articles-top-btns__1">Get a free quote</button>
              <button className="articles-top-btns__2">Browse articles</button>
            </div>
          </div>
          <div className="articles-card">
            <div className="articles-card-item">
              <img src={Article1} alt="card-img" />
              <div className="articles-card-item__card">
                <h3>
                  {" "}
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="articles-card-item__card__flex">
                  <p>
                    {" "}
                    <b>Jan 28, 2022</b>
                  </p>
                  <img src={Frame} alt="frame" />
                </div>
              </div>
            </div>
            <div className="articles-card-item">
              <img src={Article2} alt="" />
              <div className="articles-card-item__card">
                <h3>
                  How to properly disinfect your phone and other electronics
                </h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="articles-card-item__card__flex">
                  <p>
                    <b>Feb 1, 2022</b>
                  </p>
                  <img src={Frame} alt="frame" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="flex">
            <div className="contact-left">
              <h2>Contact Us</h2>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className="contact-left-flex">
                <img src={Call} alt="call-icon" />
                <div className="contact-left-flex__2">
                  <p>Call us now</p>
                  <h2>(414) 567 - 2109</h2>
                </div>
              </div>
              <h3>Not convinced yet?</h3>
              <h5>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </h5>
              <button className="btn">Browse our packages</button>
            </div>
            <div className="contact-right">
              <div className="contact-right-flex">
                <div className="flex">
                  <div>
                    <div>
                      <p>Full name</p>
                      <input className="input" type="text" />
                    </div>
                    <div>
                      {" "}
                      <p>Address</p>
                      <input className="input" type="text" />
                    </div>
                    <div>
                      {" "}
                      <p>Requested service</p>
                      <input className="input" type="text" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>Phone number</p>
                      <input className="input" type="text" />
                    </div>
                    <div>
                      {" "}
                      <p>Email</p>
                      <input className="input" type="text" />
                    </div>
                    <div>
                      {" "}
                      <p>Day of service</p>
                      <input className="input" type="text" />
                    </div>
                  </div>
                </div>
                <p>Add a note</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className="btn">Submit message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
