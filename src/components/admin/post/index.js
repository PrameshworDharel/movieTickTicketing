import React from "react";
import Sidebar from "../sidebar";
import Topbar from "../topbar";
import Postpage from "../post/postpage";
const Post = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          <Postpage />
        </div>
      </div>
    </>
  );
};
export default Post;
