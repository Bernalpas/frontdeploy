
import { useState, useEffect } from 'react';
import axios from 'axios';



const Buscar = () => {

    const [personas, setPersonas] = useState([]);
    const [query, setQuery] = useState('');

    const URL = 'https://backdeploy-production.up.railway.app/users/buscar'

    useEffect(() => {

        const getPersona = async () => {

            try {
                const { data } = await axios.get(`${URL}?nombre=${query}`);
                setPersonas(data.personas);
                console.log(data);           
            } catch (error) {
                console.error('Error en el get', error);
            }
        }

        getPersona()

    }, [query])


    return (
        <>
            <h1 className="text-center mt-5 mb-5">
                Buscar Personas
            </h1>

            <div className="container mt-5 text-center">

                <input 
                    type='text'
                    value={query}
                    placeholder='Buscar por Nombre'
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="container mt-5 text-center">
                    {personas.map(persona =>
                        <tr key={persona._id}>
                            {/* <td>{persona._id}</td> */}
                            <td>{persona.nombre}</td>
                            <td>{persona.apellido}</td>
                            {/* <td>{persona.dni}</td> */}
                        </tr>
                    )}
            </div>

        </>
    )
}

export default Buscar;