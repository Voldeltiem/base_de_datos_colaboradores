import React from 'react'
import { useState } from 'react';

function Header({data, onFiltroColaborador}) {
    // se declaran los hook
    const [buscarNombre, setBuscarNombre] = useState('')

    const buscarColaborador = (e) => {
        setBuscarNombre(e.target.value)
        //se agrega el elemento filtrado a un nuevo arreglo, se compara por medio del metodo includes
        //y se especifica que ambos parametros de comparacion sean en minuscula por medio de tolowercase
        const filtroColaborador = data.filter((iName) => iName.nombre.toLowerCase().includes(buscarNombre.toLowerCase()));
        onFiltroColaborador(filtroColaborador);
    }
    return(
        <div className="input-group mb-3 buscar">
            <input type="text" className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={buscarColaborador} placeholder='Ingrese nombre de colaborador'></input>
            <span className="input-group-text" id="basic-addon2">Bucador de Colaboradores</span>
        </div>
    )
}

export default Header