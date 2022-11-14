import axios from "axios";
import React, { useEffect, useState } from "react";

import { SERVER_ADDRESS } from "../../App";

function UpdatePost() {
  const [id, setId] = useState("");
  const [post, setPost] = useState({});
  const [fetched, setFetched] = useState(false);

  const handleIDChange = (event) => {
    setId(event.target.value);
    setFetched(false);
  };

  const handleFieldChange = (event) => {
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const fetchPostData = (event) => {
    event.preventDefault();
    if (id.length) {
      axios
        .get(`${SERVER_ADDRESS}/post/${id}/`)
        .then((res) => setPost(res.data))
        .catch((err) => console.log(err));
      setFetched(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fetched) {
      var price = parseFloat(post.price);
      const data = { ...post, price: price };
      axios
        .put(`http://127.0.0.1:3001/post/update/${id}`, data)
        .then((res) => {
          setPost({
            username: "",
            title: "",
            location: "",
            price: "",
            description: "",
          });
          setId("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="w-50 mx-auto p-3 my-2 bg-white rounded d-flex flex-column align-items-center">
      <div class="input-group mb-3 w-75 mx-auto">
        <input
          type="text"
          id="post-id"
          class="form-control"
          placeholder="Post id"
          value={id}
          onChange={handleIDChange}
        />
        <button class="btn btn-secondary" type="button" onClick={fetchPostData}>
          Fetch Post Data
        </button>
      </div>

      <h3>Update Post</h3>

      <form className="container p-2">
        <div className="mb-3">
          <label for="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={post.username}
            onChange={handleFieldChange}
          />
        </div>
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={post.title}
            onChange={handleFieldChange}
          />
        </div>
        <div className="mb-3">
          <label for="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={post.location}
            onChange={handleFieldChange}
          />
        </div>
        <div className="mb-3">
          <label for="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={post.price}
            onChange={handleFieldChange}
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            rows={3}
            className="form-control"
            id="description"
            value={post.description}
            onChange={handleFieldChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdatePost;
