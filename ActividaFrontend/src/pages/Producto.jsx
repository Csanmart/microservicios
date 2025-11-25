import React from "react";
import Footer from "../componentes/Footer";
import TableProductos from "../componentes/Productos/TableProductos";
import FormularioProductos from "../componentes/Productos/FormularioProductos";
import '../estilo/formulario.css'
export default function Productos() {
    return(
        <div>
            <header>
                <h1>Productos</h1>
                <p>Microservicio realizado con mongodb</p>
            </header>
            <section className="Tabla">
                <div className="mb-3">
                    <h2>Lista de productos</h2>
                </div>
                <TableProductos/>
            </section>
            <section className="Formulario">
                <div className="mb-3">
                    <h2>Crear usuario</h2>
                </div>
                <FormularioProductos/>
            </section>
            <section className="Footer">
                <footer className="mb-4">
                    <Footer></Footer>
                </footer>
            </section>
        </div>
    )
}