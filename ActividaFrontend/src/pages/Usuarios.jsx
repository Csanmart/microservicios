import React from "react"
import Footer from "../componentes/Footer"
import TableUsuarios from "../componentes/Usuarios/TableUsuarios"
import FormularioUsuario from "../componentes/Usuarios/FormularioUsuario"

export default function Usuarios(){
    return(
        <div>
            <div>
                        <header>
                            <h1>Usuarios</h1>
                            <p>Microservicio realizado con mysql</p>
                        </header>
                        <section className="Tabla">
                            <div className="mb-4">
                                <h2>Lista de usuarios</h2>
                            </div>
                            <TableUsuarios/>
                        </section>
                        <section className="Formulario">
                            <div className="mb-4">
                                <h2>Crear Usuario</h2>
                            </div>
                            <FormularioUsuario></FormularioUsuario>
                        </section>
                        <section className="Footer">
                            <footer>
                                <Footer/>
                            </footer>
                        </section>
                    </div>
        </div>
    )
}