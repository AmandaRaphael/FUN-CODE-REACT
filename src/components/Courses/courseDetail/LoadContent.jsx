import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import kid from "../../../images/kid.jpg";
import kidmom from "../../../images/kidmom.jpg";
import man from "../../../images/man.webp";
import { useNavigate } from "react-router-dom";
import style from "./loadcontent.module.css"
const LoadContent = ({ courseDetail, courseCategory }) => {
  const categories = [
    [
      kid,
      ["Weekday Evening Classes", "Weekend Morning Classes"],
      ["1-hr/day", "2-hr/day"],
      ["100€/month", "80€/month"],
    ],
    [
      kidmom,
      ["Weekday Evening Classes", "Weekend Morning Classes"],
      ["3-hr/day", "6-hr/day"],
      ["1000€/month", "800€/month"],
    ],
    [man, ["Weekday Morning Classes"], ["6-hr/day"], ["1500€/month"]],
  ];
  const buttonHandle = () => {
    navigate("/courses/apply");
  };

  const navigate = useNavigate();

  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    if (courseCategory === "kid") {
      setCategoryIndex(0);
    } else if (courseCategory === "part-time") {
      setCategoryIndex(1);
    } else if (courseCategory === "full-time") {
      setCategoryIndex(2);
    }
  }, [courseCategory]);
  
  return (
    <div className={style.contentContainer}>
      {categoryIndex != null
        ? categories[categoryIndex][1].map((ele, i) => {
            return (
              <div className={style.card}>
                <Card style={{ width: "18rem" }} key={i}>
                  <Card.Img variant="top" src={categories[categoryIndex][0]} />
                  <Card.Body>
                    <Card.Title>{courseDetail}</Card.Title>
                    <Card.Text>{ele}</Card.Text>
                    <Card.Text>
                      Duration : {categories[categoryIndex][2][i]}
                    </Card.Text>
                    <Card.Text>
                      Price: {categories[categoryIndex][3][i]}
                    </Card.Text>
                    <Button variant="info" onClick={buttonHandle}>
                      Apply Now
                    </Button>
                  </Card.Body>{" "}
                </Card>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default LoadContent;
