import React from "react";

const poster = props => (
  <div>
    <img
      onClick={props.clicked}
      src={props.imgUrl}
      className={props.classes}
      style={{
        width: props.width,
        height: props.height,
        zIndex: 500,
        cursor: "pointer"
      }}
      alt="filmPoster"
    />
  </div>
);
export default poster;
