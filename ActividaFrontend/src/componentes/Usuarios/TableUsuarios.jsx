import React, { useEffect, useState } from "react";
import {usuarioService} from "../../service/Usuario";
import '../../estilo/tables.css'
import Buttons from "../Buttons";

export default function TableUsuarios() {

    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const seeUsers = async()=>{
            try {
                let data = await usuarioService.mostrarUsuarios();
                console.log('Datos de la api', data)
                setUsuarios(Array.isArray(data) ? data : data.data || data.usuarios || [])
            } catch (error) {
                setError('Error llamando los usuarios...');
            }
        }
        seeUsers();
    }, [])

    

    return(
        <table>
            <thead>
                <tr>
                    <th>Identificador</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
            {usuarios.map((u)=>(
                <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.nombre}</td>
                    <td>{u.correo}</td>
                    <td>{u.telefono}</td>
                    <td>
                        <Buttons id={u.id} service={usuarioService.actualizarUsuario()} data={usuarios}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}