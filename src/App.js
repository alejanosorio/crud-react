import Listar from "./components/Listar";
import Create from "./components/Create";
import Edit from "./components/Editar";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="#">
              crud react
            </Link>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to={"/"}>
                    sistema
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/create"}>
                    crear empleado
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to={"/editar"}>
                    editar empleado
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Listar} />
        <Route path="/create" component={Create} />
        <Route path="/editar" component={Edit} />
      </div>
    </Router>
  );
}

export default App;
