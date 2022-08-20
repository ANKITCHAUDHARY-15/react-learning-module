import React, { Component } from "react";
import axios from "axios";
import { LogInfo, LogError } from "../../FunctionalComponents/CommonMethod";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
      post: null,
    };
    this.inputRef = React.createRef();
  }
  fetchPosts = () => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response) {
          console.log(response);
          this.setState({ posts: response.data });
        } else {
          LogInfo("Data not fetched through api");
        }
      })
      .catch((error) => {
        LogError("Error in Post Data Fetching");
      });
  };
  componentDidMount() {
    if (!this.state.posts) {
      this.fetchPosts();
    }
  }
  GetPostDetails = () => {
    const postId = this.inputRef.current.value;
    axios("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((response) => {
        if (response) {
          console.log(response);
          this.setState({ post: response.data });
        } else {
          LogInfo("Data not fetched through api");
        }
      })
      .catch((error) => {
        LogError("Error in Post Data Fetching");
      });
  };
  render() {
    const { posts, post } = this.state;
    return (
      <div>
        <div className="border-purple-1 m-1 p-1">
          <h5>PostList</h5>
          <div>
            <div className="border-purple-1 m-1 p-1">
              fetched Post List Length :{" "}
              {posts && posts.length ? posts.length : 0}
            </div>
            <div className="border-purple-1 m-1 p-1">
              <div>
                <label>Enter post id to see post details</label>
                <input ref={this.inputRef} />
                <button onClick={this.GetPostDetails}>Get Details</button>
              </div>
              <div>
                <div>
                  {post && (
                    <div>
                      <div>ID : {post.id}</div>
                      <div>USERID : {post.userId}</div>
                      <div>TITLE : {post.title}</div>
                      <div>BODY : {post.body}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
