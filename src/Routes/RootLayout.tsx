import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar";

const RootLayout = () => {
  return (
    <div>
      <div>
        <header>
          <h1>My App Header</h1>
          <nav>
            <Navbar />
          </nav>
        </header>
      </div>
      <main>
        <Outlet /> {/* This renders the child routes, such as App */}
      </main>
      <footer>
        <p>My Footer</p>
      </footer>
    </div>
  );
};

export default RootLayout;
