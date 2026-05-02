import React from 'react';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

function EmployeeRow(props) {
  const employee = props.employee;

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.extension}</td>
      <td>{employee.email}</td>
      <td>{employee.title}</td>
      <td>{new Date(employee.dateHired).toDateString()}</td>
      <td>{employee.currentlyEmployed ? 'Yes' : 'No'}</td>
      <td>
        <button onClick={() => props.deleteEmployee(employee._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

function EmployeeTable(props) {
  const employeeRows = props.employees.map(employee => (
    <EmployeeRow
      key={employee._id}
      employee={employee}
      deleteEmployee={props.deleteEmployee}
    />
  ));

  return (
    <table border="1" cellPadding="5" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Date Hired</th>
          <th>Currently Employed?</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
  );
}

export default class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = { employees: [] };

    this.createEmployee = this.createEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/employees')
      .then(response => response.json())
      .then(data => {
        this.setState({ employees: data });
        console.log('Total count of employees:', data.length);
      })
      .catch(err => {
        console.error('Error loading employees:', err);
      });
  }

  createEmployee(employee) {
    fetch('/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    })
      .then(response => response.json())
      .then(newEmployee => {
        this.setState(prevState => {
          const updatedEmployees = [...prevState.employees, newEmployee];
          console.log('Total count of employees:', updatedEmployees.length);
          return { employees: updatedEmployees };
        });
      })
      .catch(err => {
        console.error('Error creating employee:', err);
      });
  }

  updateEmployee(id, updatedData) {
    fetch(`/api/employees/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    })
      .then(response => response.json())
      .then(updatedEmployee => {
        this.setState(prevState => ({
          employees: prevState.employees.map(employee =>
            employee._id === id ? updatedEmployee : employee
          ),
        }));
      })
      .catch(err => {
        console.error('Error updating employee:', err);
      });
  }

  deleteEmployee(id) {
    fetch(`/api/employees/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        this.setState(prevState => {
          const updatedEmployees = prevState.employees.filter(
            employee => employee._id !== id
          );
          console.log('Total count of employees:', updatedEmployees.length);
          return { employees: updatedEmployees };
        });
      })
      .catch(err => {
        console.error('Error deleting employee:', err);
      });
  }

  render() {
    return (
      <>
        <h1>Employee Management Application</h1>

        <EmployeeFilter />

        <hr />

        <EmployeeTable
          employees={this.state.employees}
          deleteEmployee={this.deleteEmployee}
        />

        <hr />

        <EmployeeAdd createEmployee={this.createEmployee} />
      </>
    );
  }
}