import axios from "axios";
import React, { useState } from "react";

import { SERVER_ADDRESS } from "../../App";

function DeletePost() {
  const [id, setID] = useState("");

  const handleChange = (event) => {
    setID(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (id.length) {
      axios
        .delete(`${SERVER_ADDRESS}/post/delete/${id}`)
        .then((res) => setID(""))
        .catch((err) => console.log(err));
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
          class="btn btn-danger"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}

export default DeletePost;
