import React, { useState } from "react";
import Swal from "sweetalert2";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import UseLoader from "../../hooks/UseLoader";

export default function TransportadorCreate() {
  const [loader, showLoader, hideLoader] = UseLoader();
  const [nomeTransportador, setNomeTransportador] = useState("");
  const [placaVeiculo, setPlacaVeiculo] = useState("");

  async function handleNewTransportador(e) {
    e.preventDefault();

    const data = {
      nomeTransportador,
      placaVeiculo,
    };

    try {
      showLoader();
      await api.post("/transportador/create", data).then(() => {
        hideLoader();
        Swal.fire({
          title: "Cadastrado com sucesso",
          icon: "success",
        });
      });
      document.querySelector("form").reset();
    } catch (err) {
      hideLoader();
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
      {loader}
    </div>
  );
}
