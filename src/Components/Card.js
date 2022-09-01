import React from "react";
import "../styles/Card.css";
const Card = ({ data }) => {
  const courses = (course) => {
    return (
      <div className="course-preview">
        <div className="course-img">
          <a href="#">
            <img src={`${course.img}`} alt=".........." />
          </a>
        </div>
        <div className="course-info">
          <div className="course-description">{course.title}</div>
          <div className="course-author">{course.author}</div>
          <div className="course-rate">
            <span className="checked">{course.rate}</span>
            <span className={`fa fa-star ${course.draw_star[0]}`}></span>
            <span className={`fa fa-star ${course.draw_star[1]}`}></span>
            <span className={`fa fa-star ${course.draw_star[2]}`}></span>
            <span className={`fa fa-star ${course.draw_star[3]}`}></span>
            <span
              className={`fa fa-star-half-full ${course.draw_star[4]}`}
            ></span>
            <span className="students">{course.students}</span>
          </div>
          <div className="course-price">{course.price}</div>
          <p class="course_badge">Bestseller</p>
        </div>
      </div>
    );
  };
  return <div className="course-preview-container">{data.map(courses)}</div>;
};
export default Card;
