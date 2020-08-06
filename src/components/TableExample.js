import React from "react";

import { Row, Col, Card, CardHeader, CardBody, Table } from "reactstrap";

class TableExample extends React.Component {
  render() {
    return (
      <>
        <Card className="shadow">
          <CardHeader>
            <h3>Example Table</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={12}>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>First Name</td>
                      <td>Last Name</td>
                      <td>Username</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>First Name</td>
                      <td>Last Name</td>
                      <td>Username</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>First Name</td>
                      <td>Last Name</td>
                      <td>Username</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default TableExample;
