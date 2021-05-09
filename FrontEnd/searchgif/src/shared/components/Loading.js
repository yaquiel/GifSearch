import React, { useContext } from "react";
import { ImagesContext } from "../context/images-context";

import "./Loading.css";
const Loading = (props) => {
  const { loading } = useContext(ImagesContext);
 
  return (
    <div
      className={`loading-spinner__overlay ${loading ? "d-flex" : "d-none"}`}
    >
      <i className="fas fa-spinner"></i>
    </div>
  );
};

export default Loading;
