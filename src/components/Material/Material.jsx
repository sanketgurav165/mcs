import React from 'react';
import {Table} from "reactstrap";

function Material() {
  return (
    <div> 
      <h3> <strong> Staff: </strong> </h3>
        <Table
  bordered
  borderless
  dark
  hover
  responsive
  size=""
  striped
>
  <thead>
    <tr>
      <th>
        
      </th>
      <th>
        Engineers
      </th>
      <th>
      Supervisor
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        
      </th>
      <td>
        5
      </td>
      <td>
        4
      </td>
      
    </tr>

  </tbody>
</Table>
      <h3> <strong> Material Details : </strong> </h3>
        <Table
  bordered
  borderless
  dark
  hover
  responsive
  size=""
  striped
>
  <thead>
    <tr>
      <th>
        S.r
      </th>
      <th>
        Material
      </th>
      <th>
        Quantity
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Props
      </td>
      <td>
      700 Nos
      </td>
      
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Vertical 2.5m,3m,2m 
      </td>
      <td>
      2.5m,3m,2m -12500 Nos
      </td>
     
    </tr>

    <tr>
      <th scope="row">
        3
      </th>
      <td>
        U jack
      </td>
      <td>
        10000 Nos
      </td>

    </tr>

    <tr>
      <th scope="row">
        4
      </th>
      <td>
        Base jack
      </td>
      <td>
        12000 Nos
      </td>
    </tr>

    <tr>
      <th scope="row">
        5
      </th>
      <td>
        Channel
      </td>
      <td>
        1000 Nos
      </td>
    </tr>
    <tr>
      <th scope="row">
        6
      </th>
      <td>
        Concrete Lift
      </td>
      <td>
        5 Nos upto 22 Floors
      </td>
    </tr>
    <tr>
      <th scope="row">
        7
      </th>
      <td>
        Concrete Mixture 
      </td>
      <td>
        5 Nos
      </td>
    </tr>
    <tr>
      <th scope="row">
        8
      </th>
      <td>
        Plate
      </td>
      <td>
       2000 Nos
      </td>
    </tr>




  </tbody>
</Table>
    </div>
  )
}

export default Material