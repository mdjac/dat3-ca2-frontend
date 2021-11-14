import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const CarScreen = (props) => {
  const [data, setData] = useState();

  async function fetchMyAPI() {
    let apiData = await props.dataFacade.fetchCars();
    console.log(apiData);
    setData(apiData);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <div>
      <h2 className="header">ProtectedScreen</h2>
      {data && (
        <React.Fragment>
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
              <div>
                <h4>Welcome, {data.username}!</h4>
                <Table
                  striped
                  bordered
                  hover
                  style={{
                    width: "30%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <thead>
                    <tr>
                      <th>Roles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.roles.map((role) => (
                      <tr key={role.rolename}>
                        <td>{role.rolename}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <h4>Cars</h4>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Car ID</th>
                      <th>Brand</th>
                      <th>Model</th>
                      <th>Year</th>
                      <th>Workshop ID</th>
                      <th>Name</th>
                      <th>City</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.cars.map((car) => (
                      <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.brand}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{car.workshop.id}</td>
                        <td>{car.workshop.name}</td>
                        <td>{car.workshop.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div class="col-4"></div>
        </React.Fragment>
      )}
    </div>
  );
};

export default CarScreen;
