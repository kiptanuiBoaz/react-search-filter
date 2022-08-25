import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';
import "./index.css";
//this is the entry poing
function App() {
  const [search,setSearch] = useState("");

  return (
    <div className="App">
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>

        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              placeholder='Search contacts'
              onChange={(e)=>{
                setSearch(e.target.value);
              }}
            />
          </InputGroup>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>

          {
            data.filter((item)=>{
              return(
                search.toLowerCase() ==="" ? item : item.toLowerCase().includes(search)
              )

            })
            .map((item)=>
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>

            )
          }
              
          </tbody>
        </Table>
      </Container>
  </div>

  );
}

export default App;
