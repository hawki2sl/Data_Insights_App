import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <h1>My App Header</h1>
        {/* Add any shared navigation or header content */}
      </header>
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
