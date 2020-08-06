import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  Navbar,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  NavbarToggler,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SimpleNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const sidebar = () => {
    props.openSidebar();
  };

  let Icon;
  if (props.sidebarOpen) {
    Icon = <FontAwesomeIcon icon={faArrowLeft} />;
  } else {
    Icon = <FontAwesomeIcon icon={faArrowRight} />;
  }

  return (
    <Navbar color="dark" dark expand="md">
      <Button className="btn btn-primary" onClick={sidebar} id="menu-toggle">
        {Icon}
      </Button>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/users" tag={Link}>
              Users
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/task" tag={Link}>
              Task
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Menu
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem to="/contact" tag={Link}>
                Contact
              </DropdownItem>
              <DropdownItem to="/about" tag={Link}>
                About
              </DropdownItem>
              <DropdownItem to="/map" tag={Link}>
                Map
              </DropdownItem>
              <DropdownItem to="/tools" tag={Link}>
                Tools
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink to="Logout" tag={Link}>
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default SimpleNavbar;
