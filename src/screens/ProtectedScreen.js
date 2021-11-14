import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const ProtectedScreen = (props) => {
  const [data, setData] = useState();

  async function fetchMyAPI() {
    let apiData = await props.dataFacade.dataThreads();
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
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    {Object.keys(data.weather).map((header, index) => {
                      return <th key={index}>{header}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.weather.title}>
                    <td>{data.weather.title}</td>
                    <td>{data.weather.location_type}</td>
                    <td>{data.weather.latt_long}</td>
                  </tr>
                </tbody>
              </Table>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Currency Name</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(data.currencies).map(([key, value]) => {
                    return (
                      <tr>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
          <div class="col-4"></div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProtectedScreen;
