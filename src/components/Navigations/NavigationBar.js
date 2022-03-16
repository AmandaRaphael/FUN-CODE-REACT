import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/FCA.gif";
import styles from "./NavBar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false); 
  return (
    <div className={styles.navContainer}>
      <Navbar
        expand="lg"
        // sticky="top"
        // className="d-flex flex-column flex-md-row align-items-center justify-content-center
        // p-4 px-md-4 mb-4   border-bottom shadow-sm nav"
      >
        <Container id={styles.navContainer}>
          <h5 className="my-0 mr-md-auto ">
            {" "}
            <NavLink
              onClick={() => setExpanded(false)}
              className={(navData) =>
                navData.isActive ? styles.selected : styles.unselected
              }
              to={"/"}
            >
              <img src={logo} alt="logo" width="100px" />
            </NavLink>
          </h5>
          <h3 className={styles.title}>
            <NavLink to={"/"}>Fun-code Academy</NavLink>
          </h3>
        </Container>

        <Navbar
          expand="lg"
          collapseOnSelect
          expanded={expanded}
          style={{ width: "100%" }}
        >
          {" "}
          <Container className={styles.Toggle}>
            {" "}
            <Navbar.Toggle
              onClick={() => setExpanded(expanded ? false : "expanded")}
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              {" "}
              <Nav className="me-auto">
                <NavLink
                  onClick={() => setExpanded(false)}
                  className={(navData) =>
                    navData.isActive ? styles.selected : styles.unselected
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setExpanded(false)}
                  className={(navData) =>
                    navData.isActive ? styles.selected : styles.unselected
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
                <NavLink
                  onClick={() => setExpanded(false)}
                  className={(navData) =>
                    navData.isActive ? styles.selected : styles.unselected
                  }
                  to={"/contact"}
                >
                  Contact
                </NavLink>
                <NavLink
                  onClick={() => setExpanded(false)}
                  className={(navData) =>
                    navData.isActive ? styles.selected : styles.unselected
                  }
                  to={"/courses"}
                >
                  Courses
                </NavLink>
                <NavLink
                  onClick={() => setExpanded(false)}
                  className={(navData) =>
                    navData.isActive ? styles.selected : styles.unselected
                  }
                  to={"/MyClass"}
                >
                  MyClass
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
