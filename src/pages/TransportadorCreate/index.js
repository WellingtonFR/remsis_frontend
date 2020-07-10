import React, { useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";

export default function TransportadorCreate() {
  const [nomeTransportador, setNomeTransportador] = useState("");
  const [placaVeiculo, setPlacaVeiculo] = useState("");
  const [created_at] = useState(moment().format("DD/MM/YYYY hh:mm:ss a"));

  async function handleNewTransportador(e) {
    e.preventDefault();

    const data = {
      nomeTransportador,
      placaVeiculo,
      created_at,
    };

    try {
      await api.post("/transportador/create", data).then(() => {
        Swal.fire({
          title: "Cadastrado com sucesso",
          icon: "success",
          showConfirmButton: false,
          timer: 1100,
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
    <div className="transportador container-fluid">
      <h1>Cadastro de transportador</h1>
      <form onSubmit={handleNewTransportador}>
        <hr />
        <div className="form-group">
          <label htmlFor="nomeTransportador">Nome</label>
          <input
            type="text"
            name="nomeTransportador"
            className="form-control"
            maxLength="50"
            required
            onChange={(e) => setNomeTransportador(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="placaVeiculo">Placa do veículo</label>
          <input
            type="text"
            name="placaVeiculo"
            className="form-control"
            maxLength="8"
            required
            onChange={(e) => setPlacaVeiculo(e.target.value)}
          />
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
