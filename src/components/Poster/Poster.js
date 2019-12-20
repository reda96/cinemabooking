import React from "react";
import picture from "../../assets/filmPoster.jpg";

const poster = props => (
  <div>
    <img
      src={picture}
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
