import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      prevArrow: false,
      nextArrow: false,
      autoplay: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      touchMove: true
    };
    return (
      <div className="home--slider">
        <ul className="slides">
          <Slider {...settings}>
            <li className="slide--item">
              <img src={require("./../../assets/images/slides/one.jpg")} />
              <div className="slide--content">
                <div className="container">
                  <h2 className="slide--title">
                    vitae maiores blanditiis ipsum quasi
                  </h2>
                  <h3 className="slide--date">October 15, 2017</h3>
                  <p className="slide--description">
                    Vivamus ac lectus a felis semper facilisis nec id sapien.
                    Cras nec facilisis elit.
                  </p>
                </div>
              </div>
            </li>
            <li className="slide--item">
              <img src={require("./../../assets/images/slides/two.jpg")} />
              <div className="slide--content">
                <div className="container">
                  <h2 className="slide--title">
                    Sed vitae nibh ac mi sagittis pretium id id nibh
                  </h2>
                  <h3 className="slide--date">November 6, 2017</h3>
                  <p className="slide--description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </li>
            <li className="slide--item">
              <img src={require("./../../assets/images/slides/three.jpg")} />
              <div className="slide--content">
                <div className="container">
                  <h2 className="slide--title">
                    Nullam sem est, bibendum et sodales nec
                  </h2>
                  <h3 className="slide--date">December 31, 2017</h3>
                  <p className="slide--description">
                    Aut unde illum soluta libero nam accusamus aspernatur,
                    nostrum tenetur.
                  </p>
                </div>
              </div>
            </li>
          </Slider>
        </ul>
      </div>
    );
  }
}
