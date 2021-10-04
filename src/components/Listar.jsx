import React, { Component } from "react";
import { Link } from "react-router-dom";

class Listar extends Component {
  constructor(props) {
    super(props);
    this.state = { cargados: false, empleados:[] };
  }
  cargaDatos() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((datos) => {
        console.log(datos);
        this.setState({
          cargados:true,
          empleados:datos
        })
      })

      .catch(console.log);
  }

  componentDidMount() {
    this.cargaDatos();
  }

  render() {
    const { cargados,empleados } = this.state;
    if (!cargados) {
      return <div>cargando...</div>;
    } else {
      return (
        <table class="table table-success table-striped ">
          <thead>
          
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
          {empleados.map((empleado)=>(

            
            <tr key={empleado.id}>
              <td scope="row">{empleado.id}</td>
              <td>{empleado.name}</td>
              <td>{empleado.email}</td>
              <td>
                <div className="btn-group" role="group">
                  <Link className="btn btn-success" to={"/editar"}>
                    edit
                  </Link>
                  <Link type="button" className="btn btn-danger">
                    delete
                  </Link>
                </div>
              </td>
            </tr>)
            )}

          </tbody>
        </table>
      );
    }
  }
}

export default Listar;
