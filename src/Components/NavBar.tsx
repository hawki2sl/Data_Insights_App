import { Link } from "react-router-dom";
import classes from "../Styles/NavBar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

let id = 0;

const incID = () => {
  return ++id;
};

const navListItems = [
  {
    id: incID(),
    path: "/",
    label: "Home",
  },
  {
    id: incID(),
    path: "/upload",
    label: "File Upload Page",
  },
  {
    id: incID(),
    path: "/insights",
    label: "Insights Display Page",
  },
  {
    id: incID(),
    path: "#",
    label: "Sign Up/Sign In",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className={classes.nav_container}>
      <FontAwesomeIcon
        icon={faBars}
        className={classes.hamburger}
        onClick={toggleMenu}
      />
      <ul className={`${isOpen ? classes.nav_list_isOpen : classes.nav_list}`}>
        {navListItems.map((item) => {
          return (
            <li key={item.id} className={classes.nav_item}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
