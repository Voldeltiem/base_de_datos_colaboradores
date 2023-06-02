import React from 'react'
import { useState } from 'react';

function Main({data, setData}) {
    // se declaran los hook
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')

      //se ingrega el nombre y email por medio de los hook correspondientes
    const capturarName = (inName) => {
        setNombre(inName.target.value)
    }
    const capturarEmail = (inEmail) => {
        setEmail(inEmail.target.value)
    }

    const agregarColaborador = (e) => {
        //preventDefault se uutiliza para prevenir el comportamiento predeterminado
        e.preventDefault()
        //se agregan los datos mediante spread y se da  id al azar
        setData([...data, { id: ('000' + (Date.now() % 100000)).slice(-4), nombre: nombre, correo: email }])
    }
  return (
    <form onSubmit={agregarColaborador}>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">Nombre del colaborador</span>
        <input type="text" className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2"  onChange={capturarName} placeholder='Ingresa el nombre del colaborador'></input>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">Email del colaborador</span>
        <input type="text" className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2"  onChange={capturarEmail} placeholder='Ingresa el Email del colaborador'></input>
        </div>
        <button class="btn btn-outline-primary">Agregar Colaborador</button>
    </form>
  )        
}

export default Main