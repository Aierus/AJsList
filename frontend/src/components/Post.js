import React from "react";
import expand from "../expand.svg";

const displayDescription = (descripton) => {
  if (descripton.length <= 119) {
    return descripton;
  } else {
    return descripton.slice(0, 119) + "...";
  }
};

function Post(props) {
  return (
    <div className="bg-white rounded py-3 hover-grow" style={{ height: 175 }}>
      <h4 className="m-0 px-2" name={props.post._id}>
        {props.post.title}
      </h4>
      <div className="d-flex align-items-center justify-content-between px-2">
        <p className="m-0 text-secondary">{props.post.username}</p>
        <p className="m-0 text-secondary">{props.post._id}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center my-3 px-2">
        <h6 className="m-0">{props.post.location}</h6>
        <h6 className="m-0">${props.post.price}</h6>
      </div>
      <p className="px-2 m-0">{displayDescription(props.post.description)}</p>
      <img
        src={expand}
        id={props.post._id}
        style={{ height: 15, position: "relative", left: 425, bottom: 25 }}
        className="hover-grow-large"
      />
    </div>
  );
}

export default Post;
