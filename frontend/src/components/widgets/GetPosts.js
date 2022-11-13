import axios from "axios";
import React, { useEffect, useState } from "react";

import Post from "../Post";
import DetailedPost from "../PostDetailed";

import { SERVER_ADDRESS } from "../../App";

function displayPosts(data, expanded) {
  return data.map((post) => (
    <div className="w-50 p-2" key={post._id}>
      {expanded === post._id ? (
        <DetailedPost post={post} minify={true} />
      ) : (
        <Post post={post} />
      )}
    </div>
  ));
}

function GetPosts() {
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState("");

  const expand = (event) => {
    if (event.target.id) {
      setExpanded(event.target.id);
    }
    console.log(expanded);
  };

  useEffect(() => {
    axios
      .get(`${SERVER_ADDRESS}/posts`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="w-75 mx-auto d-flex align-items-start justify-content-start flex-wrap"
      onClick={expand}
    >
      {data ? displayPosts(data, expanded) : "Loading..."}
    </div>
  );
}

export default GetPosts;
