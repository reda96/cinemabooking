import React from "react";
import picture from "../../assets/filmPoster.jpg";

const poster = props => (
  <div>
    <img
      src={picture}
      style={{ width: "350px", height: "auto" }}
      alt="filmPoster"
    />
  </div>
);
export default poster;
