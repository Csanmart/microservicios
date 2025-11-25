import { BaseUrl } from "./BaseUrl";

class Producto extends BaseUrl{

    async mostrarProductos(){
        return this.get('/');
    }

    async mostrarPorId(id){
        return this.get(`/${id}`);
    }

    async crearProducto(data){
        return this.post('/', data);
    }


    async actulizarProducto(id, data){
        return this.put(`/${id}`, data)
    }

    async eliminarProducto(id){
        return this.delete(`/${id}`);
    }

};


export const productoService = new Producto('http://localhost:3001/productos');


