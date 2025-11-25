import React, {useState, useEffect} from "react";
import { usuarioService } from "../../service/Usuario";
import Swal from "sweetalert2";

export default function FormularioUsuario(){
    const [usuarios, setUsuario] = useState({
        nombre: '',
        correo: '',
        telefono: ''
    });
    const [error, setError] = useState(null);

    const handleChange = async(e)=>{
        setUsuario({
            ...usuarios, [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(!usuarios.nombre || !usuarios.correo || !usuarios.telefono){
            Swal.fire({
                icon: 'warning',
                title:'Los campos estan vacios',
                timer: 2400,
                timerProgressBar: true,
                showConfirmButton: false
            })
            return;
        }

        try{
            const data = await usuarioService.crearUsuario(usuarios);
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado con exito',
                text: `Usuario creado con exito ${data}`,
                timer: 2400,
                showConfirmButton: false,
                timerProgressBar: true
            })
            setUsuario(data)
        }catch(error){
            setError('Error no se puede crear usuario');
            console.log('error no se puede crear usuarios', setError, error); 
        }
    }
    
    return(
        <>
            <form action="" className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Ingrese el nombre</label>
                    <input type="text"
                        className="form-control"
                        name="nombre"
                        value={usuarios.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ingrese el correo</label>
                    <input type="text"
                        className="form-control"
                        name="correo"
                        value={usuarios.correo}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Ingrese el telefono</label>
                    <input type="text"
                        className="form-control"
                        name="telefono"
                        value={usuarios.telefono}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn bg-primary text-white">Crear usuario</button>
            </form>
        </>
    )
}