import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
import Courses from "./Courses.jsx";
import MyContext from "../../context/MyContext";
import styles from "./HomePage.module.css";
import ContactBox from "../../components/ContactBox/ContactBox.js";
const HomePage = () => {
  const { images } = useContext(MyContext);
  const navigate = useNavigate();
  const buttonHandle = () => {
    navigate("/courses");
  };
  return (
    <main>
      {" "}
      <div className={styles.home}>
        <div className={styles.overlay}>
          <h1>Learn a computer language.Open your world of opportunities!</h1>
          <h3>
            And If you want to have fun learning it,{" "}
            <Link to="/contact">Contact us,</Link> now!
          </h3>
          <ul>
            {" "}
            <li>Online coding classes at your own pace.</li>
            <li>Courses in English and German.</li>
          </ul>

          <h3>Boot-camp in German available!</h3>
          <Button variant="outline-primary" onClick={buttonHandle}>
            Explore our Courses
          </Button>
        </div>
        <div className={styles.carousel}>
          {" "}
          <Carousel fade>
            {images.map((img, i) => {
              return (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-70 carImg"
                    src={img.image}
                    alt="First slide"
                    height="700px"
                  />
                  <Carousel.Caption>
                    <div className={styles.overlayCarousel}>
                      {" "}
                      <h3>{img.course}</h3>
                      <p>{img.description}</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
      <Courses />
      <ContactBox />
    </main>
  );
};

export default HomePage;
