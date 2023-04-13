import React from "react";
import "./Header.css";
import { Link,  useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("loggedIn");
  console.log("loginnnn", auth);
  const logoutUser = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/" className="nav-link activ" href="#">
          <img src="/logo.png" width="55px" alt="" className="img-fluid me-2" />
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" className="nav-link activ" href="#">
                BookXpert
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="nav-link "
                aria-current="page"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/blogs" className="nav-link" href="#">
                Blogs
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/services" className="nav-link" href="#">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li>
              {auth ? (
                <Link
                  onClick={logoutUser}
                  to="/logout"
                  className="nav-link"
                  href="#"
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="nav-link" href="#">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
