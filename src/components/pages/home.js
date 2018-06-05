import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import data from "./data";
console.log(data);
class HomePage extends Component {
  render() {
    const posts = data.map(post => {
      return (
        <li className="post--item">
          <div className="post--img">
            <img src={post.image} />
          </div>
          <div className="post--date">
            <span>{post.date}</span>
          </div>

          <h2 className="post--title">
            <a href="./">{post.title}</a>
          </h2>
          <div className="post--presenter">
            Presented by <a href="/">{post.author}</a>
          </div>
        </li>
      );
    });
    return (
      <ul className="posts">
        <StackGrid
          columnWidth={347}
          gutterWidth={50}
          gutterHeight={0}
          monitorImagesLoaded={true}
        >
          {posts}
        </StackGrid>
      </ul>
    );
  }
}

export default HomePage;
