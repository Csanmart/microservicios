import { BaseUrl } from "./BaseUrl";


class Usuario extends BaseUrl{

    async mostrarUsuarios(){
        return this.get('/');
    }

    async crearUsuario(data){
        return this.post('/crear', data);
    }

    async mostrarPorId(id){
        return this.get(`/tomar/${id}`);
    }

    async actualizarUsuario(id, data){
        return this.put(`/actualizar/${id}`, data);
    }


    async eliminarUsuarios(id){
        return this.delete(`/eliminar/${id}`);
    }
}

export const usuarioService = new Usuario('http://localhost:3000/usuarios');