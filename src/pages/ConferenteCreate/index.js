import React, { useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";

export default function ConferenteCreate() {
  const [nomeConferente, setNomeConferente] = useState("");
  const [idConferente, setIdConferente] = useState("");
  const [created_at] = useState(moment().format("DD/MM/YYYY hh:mm:ss a"));

  async function handleNewConferente(e) {
    e.preventDefault();

    const data = {
      nomeConferente,
      idConferente,
      created_at,
    };

    try {
      await api.post("/conferente/create", data).then(() => {
        Swal.fire({
          title: "Cadastrado com sucesso !",
          icon: "success",
        });
      });
      document.querySelector("form").reset();
    } catch (err) {
      const { data } = err.response;
      Swal.fire({
        title: "Erro ao cadastrar",
        text: data.message,
        icon: "error",
        confirmButtonText: "Voltar",
      });
    }
  }

  return (
    <div className="conferente container-fluid">
      <h1>Cadastro de conferentes</h1>
      <form onSubmit={handleNewConferente} id="formCreateConferente">
        <hr />
        <div className="form-group">
          <label htmlFor="nomeConferente">Nome</label>
          <input
            type="text"
            name="nomeConferente"
            className="form-control"
            maxLength="50"
            required
            onChange={(e) => setNomeConferente(e.target.value)}
          ></input>
        </div>

        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="idConferente">ID</label>
            <input
              type="number"
              name="idConferente"
              className="form-control"
              required
              max="99999999"
              onChange={(e) => setIdConferente(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row buttons-submit">
          <div className="col-md-8">
            <button type="submit" className="btn btn-primary btn-block">
              Cadastrar
            </button>
          </div>
          <div className="col-md-4">
            <button type="reset" className="btn btn-dark btn-block">
              Limpar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
