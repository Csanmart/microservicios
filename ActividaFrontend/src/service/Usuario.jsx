import { BaseUrl } from "./BaseUrl";


class Usuario extends BaseUrl{

    async mostrarUsuarios(){
        return this.get('/');
    }

    async crearUsuario(data){
        return this.post('/', data);
    }

    async mostrarPorId(id){
        return this.get(`/${id}`);
    }

    async actualizarUsuario(id, data){
        return this.put(`/${id}`, data);
    }


    async eliminarUsuarios(id){
        return this.delete(`/${id}`);
    }
}

export const usuarioService = new Usuario('http://localhost:3002/usuarios');