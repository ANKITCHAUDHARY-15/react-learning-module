import React from "react";
import axios from "axios";
import { LogInfo, LogError } from "../FunctionalComponents/CommonMethod";

const get = () => {
  axios("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (response) {
        console.log(response);
        return response;
      } else {
        LogInfo("Data not fetched through api");
        return {};
      }
    })
    .catch((error) => {
      LogError("Error in Post Data Fetching");
    });
};
const FetchPosts = {
  get,
};
export default FetchPosts;
