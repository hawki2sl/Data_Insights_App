import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">File Upload Page</Link>
        </li>
        <li>
          <Link to="/insights">Insights Display Page</Link>
        </li>
        <li>
          <Link to="#">Sign Up/Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
