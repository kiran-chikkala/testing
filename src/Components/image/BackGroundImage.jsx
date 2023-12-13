import React from "react";
import "../image/image.css";
import { backgorundIMG } from "../../utiles/Api";
const BackGroundImage = ({ width, content, description }) => {
  return (
    <div className=" container" style={{ width: width }}>
      <img src={backgorundIMG} alt="" />
      <div className="information">
        <h1>{description}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
  s;
};

export default BackGroundImage;
