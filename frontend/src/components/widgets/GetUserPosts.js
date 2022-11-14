import React, { useState } from "react";
import axios from "axios";
import Post from "../Post";

import { SERVER_ADDRESS } from "../../App";

function displayPosts(data) {
  return data.map((post) => (
    <div className="w-50 p-2">
      <Post post={post} />
    </div>
  ));
}

function GetUserPost() {
  const [user, setUser] = useState("");
  const [data, setData] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setSearched(true);
    if (user.length) {
      axios
        .get(`${SERVER_ADDRESS}/user/${user}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    } else {
      setSearched(false);
    }
  };

  return (
    <div className="w-100 mx-auto my-3">
      <div class="input-group mb-3 w-50 mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          value={user}
          onChange={handleChange}
        />
        <button
          class="btn btn-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Get Posts
        </button>
      </div>
      <div className="w-75 mx-auto d-flex align-items-center justify-content-start flex-wrap">
        {data && searched
          ? displayPosts(data)
          : !data && searched
          ? "No Posts Found"
          : "Please Enter Username"}
      </div>
    </div>
  );
}

export default GetUserPost;
