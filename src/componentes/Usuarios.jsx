import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios';



const Usuarios = () => {

  const [ personas, setPersonas] = useState([]);

  const URL = 'https://backdeploy-production.up.railway.app/users'

  const getPersona = async () =>{

    const { data } = await axios.get(URL);
    console.log(data);

  }


  return (
    <>
      <h1 className="text-center mt-5 mb-5">
            Listamos los Usuarios de la Database
      </h1>
      <Table striped="columns" className='container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
        <button onClick={getPersona}>Dame Personas</button>
      </Table>
    </>
  )
}

export default Usuarios;

