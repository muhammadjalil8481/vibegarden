import React from "react";
import images from "../../constants/images";

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment-top">
        <img src={images.user2image} />
        <h4>James Smith</h4>
        <p>January 27, 2021 at 8:41 am</p>
      </div>
      <p className="comment-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <p className="comment-reply">Reply</p>
    </div>
  );
};

export default Comment;
