import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Styles from "./courseTitle.module.css";
const CourseTitle = () => {
  const { courseName } = useParams();
    const [profileInfo, setProfileInfo] = useState(null);
    const [randomNum,setRandomNum]=useState(0)
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setProfileInfo(data.results[0]);
      });
  }, [courseName]);
    useEffect(() => {
        setRandomNum(Math.floor(Math.random()*11))
    },[courseName])
  return (
    <div className={Styles.heading}>
      <h2>
        Your {courseName} course is at level {randomNum}. Your current teacher is { profileInfo? profileInfo.name.first:"Loading...wait for a sec" }.
      </h2>
      {profileInfo != null ? (
        <div className="row  p-5 d-flex justify-content-center ">
          <div className="col-md-5">
            <div className="card p-3 py-4 bg-light">
              <div className="text-center">
                <img
                  src={profileInfo.picture.medium}
                  width="100"
                  className="rounded-circle"
                  alt="teacherImage"
                />
              </div>
              <div className="text-center mt-3">
                {" "}
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  Pro
                </span>
                <h5 className="mt-2 mb-0">
                  {profileInfo.name.first} {profileInfo.name.last}
                </h5>{" "}
                <span>Teacher</span>
                <div className="px-4 mt-1">
                  <p className="fonts">
                    <b>Location:</b> {profileInfo.location.city},{" "}
                    {profileInfo.location.country}
                  </p>
                  <p>
                    <b>Email:</b> {profileInfo.email}
                  </p>
                </div>
                <div className="buttons">
                  <button className="btn btn-outline-primary px-4">
                    Message
                  </button>
                  
                  <button className="btn btn-primary px-4 ms-3 mt-2">
                    Go To Class
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CourseTitle;
