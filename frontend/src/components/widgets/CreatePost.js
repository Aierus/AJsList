import React, { useState } from "react";
import axios from "axios";
import { SERVER_ADDRESS } from "../../App";

function CreatePost() {
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    location: "",
    price: "",
    description: "",
  });

  const handleValueChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const hanldeSubmit = (event) => {
    event.preventDefault();
    var price = parseFloat(formData.price);
    const data = { ...formData, price: price };
    axios
      .post(`${SERVER_ADDRESS}/post/create`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(
        setFormData({
          username: "",
          title: "",
          location: "",
          price: "",
          description: "",
        })
      );
  };

  return (
    <div className="w-50 mx-auto p-3 my-2 bg-white rounded d-flex flex-column align-items-center">
      <h5 className="w-50 my-2 mx-auto border-bottom border-black text-center">
        Create Post
      </h5>
      <form className="container p-2">
        <div className="mb-3">
          <label for="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            onChange={handleValueChange}
            value={formData.username}
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
            onChange={handleValueChange}
            value={formData.title}
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
            onChange={handleValueChange}
            value={formData.location}
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
            onChange={handleValueChange}
            value={formData.price}
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={handleValueChange}
            value={formData.description}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={hanldeSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
