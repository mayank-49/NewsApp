import React from "react";
import image from '../assets/images.jpeg';

const NewsItem = ({title, desc, src, url}) => {
  return (
    <div className="card bg-dark text-light  d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px",height:"420px"}}>
      <img src={src?src:image} style={{height:"200px", width:"326px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title?title.slice(0,50):"Lorem ipsum dolor sit amet consectetur."}</h5>
        <p className="card-text">
          {desc ? desc.slice(0,90):"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione esse, cupiditate architecto."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};


export default NewsItem;
