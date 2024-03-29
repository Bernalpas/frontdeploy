import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const Usuarios = () => {

  const [ personas, setPersonas] = useState([]);

  const URL = 'https://backdeploy-production.up.railway.app/users'

  const getPersona = async () =>{

    const { data } = await axios.get(URL);
    setPersonas(data.personas);
    console.log(personas);

  }

  const deleteUser = (id) =>{
    alert(`Eliminará un usuario del registro ${id}`) 
  }

  useEffect(() => {
    getPersona()
  }, [])


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
          {personas.map(persona =>
            <tr key={persona._id}>
              <td>{persona._id}</td>
              <td>{persona.nombre}</td>
              <td>{persona.apellido}</td>
              <td>{persona.dni}</td>
              <td><Button onClick={()=>deleteUser(persona._id)} variant="danger">Delete</Button></td>
              <td><Button variant="warning">Update</Button></td>
              <td></td>
            </tr>
          )}
        </tbody>
        <button onClick={getPersona}>Dame Personas</button>
      </Table>
    </>
  )
}

export default Usuarios;

