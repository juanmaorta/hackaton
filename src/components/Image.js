import React from "react";

const Image = ({ href, src, title, description }) => (
  <article className="thumb">
    <a href={href} className="image">
      <img src={src} alt="" />
    </a>
    <h2>{title}</h2>
    <p>{description}</p>
  </article>
);

export default Image;

// exemple ici avec une div
