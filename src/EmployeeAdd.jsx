import React from 'react';

export default class EmployeeAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const form = document.forms.employeeAdd;

    const employee = {
      name: form.name.value,
      extension: Number(form.extension.value),
      email: form.email.value,
      title: form.title.value,
      dateHired: new Date(form.dateHired.value),
      currentlyEmployed: form.currentlyEmployed.checked,
    };

    this.props.createEmployee(employee);
    form.reset();
  }

  render() {
    return (
      <form name="employeeAdd" onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>

        <div>
          <label>Extension:</label>
          <input type="number" name="extension" required />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>

        <div>
          <label>Title:</label>
          <input type="text" name="title" required />
        </div>

        <div>
          <label>Date Hired:</label>
          <input type="date" name="dateHired" required />
        </div>

        <div>
          <label>Currently Employed:</label>
          <input type="checkbox" name="currentlyEmployed" defaultChecked />
        </div>

        <div>
          <button type="submit">Add Employee</button>
        </div>
      </form>
    );
  }
}