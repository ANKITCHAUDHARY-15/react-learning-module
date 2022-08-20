import React, { Component } from "react";
import PostList from "./PostList";

class HTTP extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h3 className="align-text-center">HTTP</h3>
            <div>
              <PostList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HTTP;
