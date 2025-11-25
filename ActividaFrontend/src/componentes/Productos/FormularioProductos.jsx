import React, {useState, useEffect} from "react";
import { productoService } from "../../service/Producto";
import Swal from 'sweetalert2';


export default function FormularioProductos(){
    const [producto, setProducto] = useState({
        nombre:'',
        precio: ''
    });

    const [error, setError] = useState(null);
    
    const handleChange = async(e)=>{
        setProducto({
            ...producto, [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(!producto.nombre || !producto.precio){
            Swal.fire({
                icon:'warning',
                title: 'Campos estan vacios',
                timer: 2400,
                timerProgressBar: true,
                showConfirmButton: false
            });
            return;
        };

        try{
            const data = await productoService.crearProducto(producto);
            Swal.fire({
                icon:'success',
                text: 'Usuario creado con exito', 
                timer: 2400,
                timerProgressBar: true,
                showConfirmButton: false
            })
            return(data.data)
        }catch(error){
            setError('Error creando el usuario');
        }
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="" className="col-form-control">Nombre De Producto</label>
                <input type="text" 
                className="form-control"
                value={producto.nombre}
                onChange={handleChange}       
                />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="col-form-control">Precio Del Producto</label>
                <input type="text"  
                className="form-control"
                value={producto.nombre}
                onChange={handleChange}
                />
            </div>
            <button className="btn bg-primary text-white mb-3" type="submit">Crear producto</button>
        </form>
    )




}