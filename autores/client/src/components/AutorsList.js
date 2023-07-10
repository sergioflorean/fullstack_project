import React, { useState, useEffect } from "react";
import { getAllAutors } from '../services/autor.service';
import { Link } from 'react-router-dom';

const AutorsList = () => {
    const [autors, setAutors] = useState([]);

    const getAutorsFromService = async () => {
        try {
            const list = await getAllAutors();
            console.log(list.data);
            setAutors(list.data.autors);

        } catch (error) {
            console.log(error);
        }
        console.log(autors)
    }
    useEffect(() => {
        getAutorsFromService();
    }, [])

    return (
        <div>
            <p>lista de autores</p>
        {autors.map((autor) => (
            <ul key={autor._id}>
                <li>
                    {autor.name}
                </li>             
            </ul>
        ))}
        </div>
        
    )
}

export default AutorsList;