import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div>
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="navbar-nav ml-auto">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" />
              Home
            </Link>
          </li>
          <li className="navbar-nav ml-auto">
            <Link to="/contacts/add" className="nav-link">
              <i className="fas fa-plus" />
              Add
            </Link>
          </li>
          <li className="navbar-nav ml-auto">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question" />
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
