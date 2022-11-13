import React, { useState } from "react";
import axios from "axios";
import DetailedPost from "../PostDetailed";
import { SERVER_ADDRESS } from "../../App";

function GetPostByID() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setSearched(true);
    if (id.length) {
      axios
        .get(`${SERVER_ADDRESS}/post/${id}/`)
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
          placeholder="id"
          value={id}
          onChange={handleChange}
        />
        <button
          class="btn btn-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Get Post
        </button>
      </div>
      <div className="w-50 mx-auto">
        {data && searched ? (
          <DetailedPost post={data} />
        ) : !data && searched ? (
          "No Posts Found"
        ) : (
          "Please Enter Post ID"
        )}
      </div>
    </div>
  );
}

export default GetPostByID;
