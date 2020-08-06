import React from "react";
import { Link } from "react-router-dom";

import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class SimpleSidebar extends React.Component {
  render() {
    return (
      <div className="bg-light border-right" id="sidebar-wrapper">
        <NavLink className="sidebar-heading text-dark" to="/" tag={Link}>
          <FontAwesomeIcon icon={faHome} /> Simple Sidebar
        </NavLink>
        <Nav className="list-group list-group-flush">
          <NavItem>
            <NavLink
              to="/table"
              tag={Link}
              className="list-group-item list-group-item-action bg-light"
            >
              {" "}
              Table
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/hello"
              tag={Link}
              className="list-group-item list-group-item-action bg-light"
            >
              {" "}
              Hello World!
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/error"
              tag={Link}
              className="list-group-item list-group-item-action bg-light"
            >
              {" "}
              Error 404
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default SimpleSidebar;
