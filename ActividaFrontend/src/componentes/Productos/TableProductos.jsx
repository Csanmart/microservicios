import React, {useState, useEffect} from "react";
import { productoService } from "../../service/Producto";
import '../../estilo/Tables.css'
import Buttons from "../Buttons";

export default function TableProductos(){
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const mostrarProductos = async()=>{
            try{
                let data = await productoService.mostrarProductos();
                setProductos(data.data);
            }catch(error){
                setError("Error cargando los productos...");
            }
        };
        mostrarProductos();
    },[])

    return(
        <table>
            <thead>
                <tr>
                    <th>Identificador</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((u)=>(
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.nombre}</td>
                        <td>{u.precio}</td>
                        <td>
                            <Buttons id={u.id} service={productoService} data={productos}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}