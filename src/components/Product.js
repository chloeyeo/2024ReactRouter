import React from "react";
import "../assets/css/style.scss";
import { useParams } from "react-router-dom";

const Product = (props) => {
  // "/prod/:item"
  let { id } = useParams();
  // find() is important!! (this is DIFFERENT from database find)
  let myData = props.vData.find((x) => {
    return x.id == id;
  });
  console.log(myData);

  return (
    <>
      <div className="subVisual">subVisual</div>
      <div className="container subproduct">
        <h3>{myData.title}</h3>
        <hr />
        <div className="content">
          {/* ../images not ./images */}
          <img src={`../images/${myData.img}`} alt="" />
          <p>{myData.content}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
