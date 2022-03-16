import { useNavigate, Link, Outlet } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import woman from "../../images/woman.jpg";
import girl from "../../images/girl.jpg";
import man from "../../images/man.jpg";
import Styles from "./HomePage.module.css";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
const Courses = () => {
  const pics = [girl, woman, man];
  const { images } = useContext(MyContext);

  const navigate = useNavigate();
  const buttonHandle = () => {
    navigate("/courses/apply");
  };
  return (
    <main>
      {" "}
      <div className={Styles.cardDiv}>
        {images.map((img, i) => {
          return (
            <Card style={{ width: "18rem" }} key={i} className={Styles.card}>
              <Card.Img
                variant="top"
                src={pics[i]}
                className={Styles.cardImg}
              />
              <Card.Body>
                <Card.Title className={Styles.height}>{img.course}</Card.Title>
                <Card.Text className={Styles.height}>
                  {img.description}
                </Card.Text>
                <Button variant="info" onClick={buttonHandle}>
                  Apply Now
                </Button>
                <Link
                  className={Styles.knowMoreLink}
                  to={`/courses/${img.course}/${img.category}`}
                >
                  Know more>>>
                </Link>
              </Card.Body>{" "}
            </Card>
          );
        })}
      </div>
      <Outlet />
    </main>
  );
};

export default Courses;
