import React from "react";
import ReactDOM from "react-dom";

let number = "39";
let lName = "Taher";
let fName = "Abu";
let img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h3 className="heading">Hello {fName + " " + lName}</h3>
    <img src={img + "?grayscale"} />
    <p>
      <img
        className="img-area"
        src="https://cdn.pixabay.com/photo/2018/01/09/22/51/rose-3072698_960_720.jpg"
      />
      <img
        className="img-area"
        src="https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg"
      />
      <img
        className="img-area"
        src="https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg"
      />
    </p>
  </div>,
  document.getElementById("root")
);
