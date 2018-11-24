import React, { PureComponent } from 'react'

export class TableProps extends PureComponent {
  render() {
    const { dob, relationship, email, phoneNumber, address, hobby } = this.props;
    return (
      <table id="AboutTable">
        <tr>
          <th>Date Of Birth: </th>
          <td>{dob}</td>
        </tr>
        <tr>
          <th>Relationship: </th>
          <td>{relationship}</td>
        </tr>
        <tr>
          <th>Email: </th>
          <td>{email}</td>
        </tr>
        <tr>
          <th>Phone Number: </th>
          <td>{phoneNumber}</td>
        </tr>
        <tr>
          <th>Address: </th>
          <td>{address}</td>
        </tr>
        <tr>
          <th>Hobby: </th>
          <td>{hobby}</td>
        </tr>
      </table>
    )
  }
}

export default TableProps;
