import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar";
import classes from "../Styles/RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>My App Header</h1>
        <Navbar />
      </header>
      <main>
        <Outlet /> {/* This renders the child routes, such as App */}
      </main>
      <footer>
        <p>My Footer</p>
      </footer>
    </>
  );
};

export default RootLayout;
