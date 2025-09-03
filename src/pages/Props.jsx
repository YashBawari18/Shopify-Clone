import React from "react";
import { IoStarSharp } from "react-icons/io5";

export default function Props({ image, title, description, catogery }) {
  return (
    <div>
      <div className="card">
        <img src={image} className="card-img-top scale" alt="..." />
        <div className="card-body">
          <p className="card-category">{catogery}</p>
          <h5 className="card-title">{title}</h5>
          <IoStarSharp style={{ color: "orange" }} />
          <IoStarSharp style={{ color: "orange" }} />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          2.56
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
