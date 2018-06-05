import React, { Component } from 'react';
import StackGrid from "react-stack-grid";

class HomePage extends Component {
  render() {
    return (
        <ul className="posts">
      <StackGrid
        columnWidth={347}
        gutterWidth={50}
        gutterHeight={0}
        monitorImagesLoaded={true}
      >
        <li className="post--item">
                    <div className="post--img">
                        <img src={require('./../../assets/images/posts/one.jpg')} />
                    </div>
                    <div className="post--date">
                        <span>
                            FEBRUARY 10 2017
                        </span>
                    </div>
                    
                    <h2 className="post--title">
                        <a href="./">Bureaux exquisite 
                        delightful carefully 
                        curated soft
                        power.</a>
                    </h2>
                    <div className="post--presenter">
                        Presented by <a href="#">lorem ipsum</a>
                    </div>
                </li>   
                {/* end of post item */}
                <li className="post--item">
                    <div className="post--img">
                        <img src={require('./../../assets/images/posts/two.jpg')} />
                    </div>
                    <div className="post--date">
                        <span>
                            FEBRUARY 2 2017
                        </span>
                    </div>
                    
                    <h2 className="post--title">
                        <a href="./">Sharp bureaux sleepy K-pop carefully curated.</a>
                    </h2>
                    <div className="post--presenter">
                        Presented by <a href="#">lorem ipsum</a>
                    </div>
                </li>   
                {/* end of post item */}
                <li className="post--item">
                    <div className="post--img">
                        <img src={require('./../../assets/images/posts/three.jpg')} />
                    </div>
                    <div className="post--date">
                        <span>
                            JANUARY 27 2017
                        </span>
                    </div>
                    
                    <h2 className="post--title">
                        <a href="./">St Moritz uniforms Beams.</a>
                    </h2>
                    <div className="post--presenter">
                        Presented by <a href="#">lorem ipsum</a>
                    </div>
                </li>   
                {/* end of post item */}
                 <li className="post--item">
                    <div className="post--img">
                        <img src={require('./../../assets/images/posts/six.jpg')} />
                    </div>
                    <div className="post--date">
                        <span>
                            JANUARY 12 2017
                        </span>
                    </div>
                    
                    <h2 className="post--title">
                        <a href="./">Artisanal iconic cutting-edge business class.</a>
                    </h2>
                    <div className="post--presenter">
                        Presented by <a href="#">lorem ipsum</a>
                    </div>
                </li>
  
                {/* end of post item */}   
                <li className="post--item">
                    <div className="post--img">
                        <img src={require('./../../assets/images/posts/four.jpg')} />
                    </div>
                    <div className="post--date">
                        <span>
                            JANUARY 21 2017
                        </span>
                    </div>
                    
                    <h2 className="post--title">
                        <a href="./">Esse airport veniam ryokan soft power.</a>
                    </h2>
                    <div className="post--presenter">
                        Presented by <a href="#">lorem ipsum</a>
                    </div>
                </li>

             

                {/* end of post item */}
                 
                <li className="post--item">
                    <div className="post--img">
                        <img src={require('./../../assets/images/posts/five.jpg')} />
                    </div>
                    <div className="post--date">
                        <span>
                            JANUARY 18 2017
                        </span>
                    </div>
                    
                    <h2 className="post--title">
                        <a href="./">K-pop extraordinary.</a>
                    </h2>
                    <div className="post--presenter">
                        Presented by <a href="#">lorem ipsum</a>
                    </div>
                </li>
                  
                {/* end of post item */}
      </StackGrid>
      </ul>
    );
  }
}

export default HomePage;