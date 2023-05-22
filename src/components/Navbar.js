import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import Button from "@mui/joy/Button";
import style from '../App.module.css';

function BasicExample() {
  return (
    <>
      <Navbar className={styles.NavbarContainer} expand="lg">
        <Container className={styles.NavBar}>
          <Navbar.Toggle className={styles.Hamburger} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${styles.NavContainer} me-auto`}>
              <ul className={styles.Navbar}>
                <li>
                  <Link className={styles.Link} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={styles.Link} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className={styles.Link} to="/contact">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link className={styles.Link} to="/property">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link className={styles.Link} to="/amenities">
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link className={styles.Link} to="/location">
                    Location
                  </Link>
                </li>
              </ul>
                <Button className={style.Button}>+123 456 789</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default BasicExample;
