import React from "react";
import "../styles/Courses_container.css";
const Courses_container = ({ data }) => {
  return (
    <div class="courses-header-text">
      <div class="title">{data.title}</div>
      <div class="details">{data.disc}</div>
      <button
        type="button"
        class="Explore-btn"
      >{`Explore ${data.cato}`}</button>
    </div>
  );
};
export default Courses_container;
