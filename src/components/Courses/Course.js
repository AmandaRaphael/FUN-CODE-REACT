import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Styles from "./course.module.css";
const Course = () => {
  const titles = ["JavaScript", "Css", "HTML", "React", "Python"];
  return (
    <main>
      <div className={Styles.courseContainer}>
        <h2> Welcome Laura!</h2>
        <ul className={Styles.links}>
          {titles.map((ele, i) => (
            <NavLink
              className={Styles.link}
              key={i}
              to={`/course/${titles[i]}`}
            >
              {ele}
            </NavLink>
          ))}
        </ul>
      </div>{" "}
      <Outlet />
    </main>
  );
};

export default Course;
