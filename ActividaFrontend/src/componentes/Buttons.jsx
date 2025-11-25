import React, { useEffect, useState } from "react";
import { productoService } from "../service/Producto";
import {usuarioService} from '../service/Usuario';

export default function Buttons({id, service, data}){

    const handlEliminar = async()=>{
        try{
            await service.eliminar(id);
            alert('Dato eliminado');
        }catch(error){
            console.log('Error intentando eliminar los datos', error);
            alert('Error eliminando los datos');
        }
    }
    const handleActualizar = async()=>{
        try{
            await service.actulizar(id, data);
            alert('actualizado correctamente')
        }catch(error){
            console.log('Error actulizando los datos', error);
            alert('Error actualizando los datos');
        }
    }

    return(
        <>
            <button className="btn bg-primary" onClick={handlEliminar}>Actualizar</button>
            <button className="btn bg-danger" onClick={handleActualizar}>Eliminar</button>
        </>
    )
}