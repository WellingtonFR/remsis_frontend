import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import UseLoader from "../../hooks/UseLoader";
import { FiKey, FiUser } from "react-icons/fi";
import logoMagalu from "../../img/logoMagalu.png";

export default function Login() {
  const [loader, showLoader, hideLoader] = UseLoader();
  const history = useHistory();
  const [nomeUsuario, setNomeusuario] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const data = { nomeUsuario, senha };
    try {
      showLoader();
      await api.post("authenticate", data).then((response) => {
        hideLoader();
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isLoggedIn", "true");
        history.push("/");
        window.location.reload();
      });
    } catch (err) {
      hideLoader();
      const { data } = err.response;
      Swal.fire({
        title: "Atenção",
        text: data.message,
        icon: "info",
        showConfirmButton: false,
      });
    }
  }

  return (
    <div className="body-gradient-trasition">
      <div className="container login">
        <form onSubmit={handleLogin}>
          <div className="row">
            <div className="col"></div>
            <div className="col-md-8">
              <img src={logoMagalu} className="img-fluid" alt="logoMagalu" />
            </div>
            <div className="col"></div>
          </div>
          <FiKey className="login-icons" />
          <input
            type="text"
            className="form-control"
            placeholder="USUÁRIO"
            required
            onChange={(e) => setNomeusuario(e.target.value)}
          />
          <FiUser className="login-icons" />
          <input
            type="password"
            className="form-control"
            placeholder="SENHA"
            required
            onChange={(e) => setSenha(e.target.value)}
          />
          <div className="buttons-submit">
            <button className="btn btn-primary">Entrar</button>
          </div>
        </form>
        {loader}
      </div>
    </div>
  );
}
