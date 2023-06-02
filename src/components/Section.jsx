import React from 'react'

function Section({data}) {
  return (
    <div>
        <h1>Lista de colaboradores</h1>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map(index => <tr key={index.id}>
              <td>{index.id}</td>
              <td>{index.nombre}</td>
              <td>{index.correo}</td>
            </tr>)}
          </tbody>
        </table>
    </div>
  )
}

export default Section