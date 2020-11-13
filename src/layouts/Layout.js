import React from "react";

import { HashRouter, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TableExample from "../components/TableExample";
import NoMatch from "../components/NoMatch";

class Layout extends React.Component {
  state = {
    sidebarOpen: true,
    className: "d-flex ",
  };

  openSidebar = () => {
    if (this.state.sidebarOpen) {
      this.setState({
        sidebarOpen: false,
        className: "d-flex toggled",
      });
    } else {
      this.setState({
        sidebarOpen: true,
        className: "d-flex",
      });
    }
  };

  render() {
    return (
      <HashRouter basename="/">
        <div className={this.state.className} id="wrapper">
          <Sidebar />
          <div id="page-content-wrapper">
            <Navbar
              openSidebar={this.openSidebar}
              sidebarOpen={this.state.sidebarOpen}
            />
            <br />
            <Container>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => {
                    return (
                      <div>
                        <h1>Welcome to React Simple Sidebar</h1>
                        <br />
                        <h3>
                          Based on Simple Sidebar by{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://startbootstrap.com/templates/simple-sidebar/"
                          >
                            StartBootstap
                          </a>
                        </h3>
                      </div>
                    );
                  }}
                ></Route>
                <Route
                  exact
                  path="/table"
                  render={() => {
                    return (
                      <div>
                        <TableExample />
                      </div>
                    );
                  }}
                ></Route>
                <Route
                  exact
                  path="/hello"
                  render={() => {
                    return (
                      <div>
                        <h1>Hello World!</h1>
                      </div>
                    );
                  }}
                ></Route>
                <Route>
                  <NoMatch />
                </Route>
              </Switch>
            </Container>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Layout;
