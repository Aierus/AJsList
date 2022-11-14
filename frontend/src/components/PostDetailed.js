import React, { useState, useContext } from "react";
import axios from "axios";
import expand from "../expand.svg";

import { SERVER_ADDRESS } from "../App";

import { WidgetContext, widgetMap } from "./ControlPanel";

function DetailedPost(props) {
  const [deleted, setDeleted] = useState(false);
  const { widget, setWidget } = useContext(WidgetContext);

  const minIcon = (
    <div className="d-flex justify-content-center">
      <img
        src={expand}
        id={"none"}
        className="hover-grow-large-rotated mx-auto"
        style={{ height: 15 }}
      />
    </div>
  );

  const handleUpdate = (event) => {
    event.preventDefault();
    setWidget(widgetMap[event.target.id]);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    console.log("Delete Button Clicked");
    axios
      .delete(`${SERVER_ADDRESS}/post/delete/${props.post._id}`)
      .then((res) => setDeleted(true))
      .catch((err) => console.log(err));
  };

  if (deleted) {
    return;
  }
  return (
    <div className="bg-white rounded py-3">
      <h4 className="m-0 px-2">{props.post.title}</h4>
      <div className="d-flex align-items-center justify-content-between px-2">
        <p className="m-0 text-secondary">{props.post.username}</p>
        <p className="m-0 text-secondary">{props.post._id}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center my-3 px-2">
        <h6 className="m-0">{props.post.location}</h6>
        <h6 className="m-0">${props.post.price}</h6>
      </div>
      <p className="px-2 m-0">{props.post.description}</p>
      <div className="d-flex justify-content-around align-items-center my-3 px-3">
        <button
          type="button"
          id="update-post"
          className="btn btn-primary m-3"
          onClick={handleUpdate}
        >
          Update Post
        </button>
        <button
          type="button"
          id="delete-post"
          className="btn btn-danger m-3"
          onClick={handleDelete}
        >
          Delete Post
        </button>
      </div>
      {props.minify ? minIcon : ""}
    </div>
  );
}

export default DetailedPost;
