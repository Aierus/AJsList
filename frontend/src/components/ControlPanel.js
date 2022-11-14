import React, { useEffect, useState } from "react";

import CreatePost from "./widgets/CreatePost";
import GetPosts from "./widgets/GetPosts";
import GetUserPosts from "./widgets/GetUserPosts";
import GetPostByID from "./widgets/GetPostByID";
import UpdatePost from "./widgets/UpdatePost";
import DeletePost from "./widgets/DeletePost";

// JSX For Control Panel Title and Color Key
const keyAndTitle = (
  <div className="mx-auto d-flex border-bottom border-black align-items-center justify-content-around">
    <div className="d-flex justify-content-center align-items-center">
      <div className="bg-warning mx-1" style={{ height: 10, width: 10 }} />
      <p className="m-0">CREATE</p>
    </div>
    <div className="d-flex justify-content-center align-items-center">
      <div className="bg-success mx-1" style={{ height: 10, width: 10 }} />
      <p className="m-0">READ</p>
    </div>
    <h3 className="m-0">Control Panel</h3>
    <div className="d-flex justify-content-center align-items-center">
      <div className="bg-primary mx-1" style={{ height: 10, width: 10 }} />
      <p className="m-0">UPDATE</p>
    </div>
    <div className="d-flex justify-content-center align-items-center">
      <div className="bg-danger mx-1" style={{ height: 10, width: 10 }} />
      <p className="m-0">DELETE</p>
    </div>
  </div>
);

export const widgetMap = {
  "create-post": <CreatePost />,
  "get-posts": <GetPosts />,
  "get-user-posts": <GetUserPosts />,
  "get-post-id": <GetPostByID />,
  "update-post": <UpdatePost />,
  "delete-post": <DeletePost />,
  "none-selected": null,
};

export const WidgetContext = React.createContext({
  widget: null,
  setWidget: () => {},
});

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  console.log("FORCE UPDATE");
}

function ControlPanel() {
  const [widget, setWidget] = useState("none-selected");
  const value = { widget, setWidget };
  const forceUpdate = useForceUpdate();

  const handleClick = (event) => {
    setWidget(event.target.id);
  };

  return (
    <div className="w-100">
      {/* CONTROL PANEL TITLE AND COLOR KEY */}
      {keyAndTitle}

      {/* CONTROL PANEL BUTTONS */}
      <div className="d-flex align-items-center justify-content-center">
        <button
          type="button"
          id="create-post"
          className="btn btn-warning m-3"
          onClick={handleClick}
        >
          Create Post
        </button>
        <button
          type="button"
          id="get-posts"
          className="btn btn-success m-3"
          onClick={handleClick}
        >
          Get Posts
        </button>
        <button
          type="button"
          id="get-user-posts"
          className="btn btn-success m-3"
          onClick={handleClick}
        >
          Get User's Posts
        </button>
        <button
          type="button"
          id="get-post-id"
          className="btn btn-success m-3"
          onClick={handleClick}
        >
          Get Post by ID
        </button>
        <button
          type="button"
          id="update-post"
          className="btn btn-primary m-3"
          onClick={handleClick}
        >
          Update Post's Content
        </button>
        <button
          type="button"
          id="delete-post"
          className="btn btn-danger m-3"
          onClick={handleClick}
        >
          Delete Post
        </button>
      </div>

      {/* Display Widget Here Based on State */}
      <WidgetContext.Provider value={value}>
        <div className="widget-container" onClick={forceUpdate}>
          {widgetMap[widget]}
        </div>
      </WidgetContext.Provider>
    </div>
  );
}

export default ControlPanel;
