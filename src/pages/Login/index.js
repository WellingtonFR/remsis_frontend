import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";

export default function Login() {
  const history = useHistory();
  const [nomeUsuario, setNomeusuario] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const data = { nomeUsuario, senha };
    try {
      await api.post("authenticate", data).then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isLoggedIn", "true");
        history.push("/");
        window.location.reload();
      });
    } catch (err) {
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
    <div className="container login">
      <form onSubmit={handleLogin}>
        <h1>LOGIN</h1>
        <hr />
        <label htmlFor="nomeUsuario">Usuário</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setNomeusuario(e.target.value)}
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setSenha(e.target.value)}
        />
        <div className="buttons-submit">
          <button className="btn btn-primary">Entrar</button>
        </div>
      </form>
    </div>
  );
}
