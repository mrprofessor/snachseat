import React from "react";
import Table from "react-bootstrap/Table";

const CustomTable = ({ rowData, headers }) => {
  return (
    <Table striped bordered hover>
      {headers && (
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
      )}
      <tbody>
        {Object.keys(rowData).map(key => (
          <tr key={key}>
            <td colSpan="2">{key}</td>
            <td>{rowData[key]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
