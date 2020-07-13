import React from "react";
// eslint-disable-next-line
import styles from "./styles.css";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

export default function Header() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const history = useHistory();

  async function handleLogout(e) {
    e.preventDefault();
    api.post("/logout");
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", "false");
    history.push("/login");
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-print-none">
      <a className="navbar-brand" href="/">
        RemSis
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {isLoggedIn === "true" && (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                href="!#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                TRANSFERÊNCIA
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/transferencia/create" className="dropdown-item">
                  Inserir
                </Link>
                <Link to="/transferencia" className="dropdown-item">
                  Ver todos
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                href="!#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                FILIAIS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/filiais/create" className="dropdown-item">
                  Cadastrar
                </Link>
                <Link to="/filiais" className="dropdown-item">
                  Ver todos
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                href="!#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                TRANSPORTADOR
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/transportador/create" className="dropdown-item">
                  Cadastrar
                </Link>
                <Link to="/transportador" className="dropdown-item">
                  Ver todos
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                href="!#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                CONFERENTE
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/conferente/create" className="dropdown-item">
                  Cadastrar
                </Link>
                <Link to="/conferente" className="dropdown-item">
                  Ver todos
                </Link>
              </div>
            </li>
          </ul>
        )}
        {isLoggedIn === "true" && (
          <button className="btn btn-danger btn-login" onClick={handleLogout}>
            SAIR
          </button>
        )}
      </div>
    </nav>
  );
}
