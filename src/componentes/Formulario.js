
import Form from 'react-bootstrap/Form';
import Imagen from '../componentes/Imagen';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Formulario() {

/*     let nombre = '';
    nombre = '123456'; */

    //1. Creamos las variables con los estados
    const [ nombre, setNombre ] = useState(''); 
    const [ apellido, setApellido ] = useState('');
    const [ dni, setDni ] = useState('');

    //2. Creamos la función que toma los datos del form y lo envía a la API
    const handleSubmit = async (e) => {
        e.preventDefault();

        //Prueba de captura de datos
        console.log(`Nombre: ${nombre}`);
        console.log(`Apellido: ${apellido}`);
        console.log(`Dni: ${dni}`);

        //enviamos los datos con axios
        try{

            const enviarDatos = await axios.post('https://backdeploy-production.up.railway.app/users/crear', {
                nombre,
                apellido,
                dni
            })

            console.log('Respuesta: ', enviarDatos.data);

            //vaciamos los inpus de datos
            setNombre('');
            setApellido('');
            setDni('');

        }catch(error){
            console.log(`Tenemos un error en ${error}`)
        }

    }

    return (
        <>
            <h1 className="container mt-5 text-center">
                Formulario de Registro
            </h1>
            <div className="container mt-5 d-flex">
                <Form onSubmit={ handleSubmit } className='w-75'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre: </Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Pepe"
                            value= { nombre }
                            onChange={(e) => setNombre(e.target.value)}
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Apellido: </Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Pérez" 
                            value = { apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>DNI: </Form.Label>
                        <Form.Control 
                            type="number" 
                            value={ dni }
                            onChange={(e) => setDni(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button type='submit' variant="success">Enviar Datos</Button>
                    </div>
                </Form>

                <Imagen />
            </div>
        </>
    );
}

export default Formulario;