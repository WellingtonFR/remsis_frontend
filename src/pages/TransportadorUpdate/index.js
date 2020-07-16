import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useParams, useHistory, Link } from "react-router-dom";
import moment from "moment";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";

export default function TransportadoUpdate() {
  const [transportador, setTransportador] = useState("");
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    api
      .get(`/transportador/findById/${id}`)
      .then((response) => setTransportador(response.data[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    e.persist();
    setTransportador({
      ...transportador,
      [e.target.name]: e.target.value,
    });
  };

  async function handleUpdateTransportador(e) {
    e.preventDefault();

    const data = {
      nomeTransportador: transportador.nomeTransportador,
      placaVeiculo: transportador.placaVeiculo,
      updated_at: moment().format("DD/MM/YYYY hh:mm:ss a"),
    };

    try {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      await api.put(`/transportador/update/${id}`, data).then(() => {
        Swal.fire({
          title: "Alterado com sucesso !",
          icon: "success",
          timer: 1100,
          showConfirmButton: false,
        });
      });
      history.push("/transportador");
    } catch (err) {
      const { data } = err.response;
      Swal.fire({
        title: "Erro ao alterar",
        text: data.message,
        icon: "error",
        confirmButtonText: "Voltar",
      });
    }
  }

  return (
    <div className="transportador container-fluid">
      <h1>Alteração de dados do transportador</h1>
      <small>Modifique as informação e clique em alterar</small>
      <form onSubmit={handleUpdateTransportador} id="formCreateTransportador">
        <hr />
        <div className="form-group">
          <label htmlFor="nomeTransportador">Nome</label>
          <input
            type="text"
            name="nomeTransportador"
            className="form-control disabled"
            maxLength="6"
            value={transportador.nomeTransportador}
            disabled
            required
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="placaVeiculo">Placa do veículo</label>
          <input
            type="text"
            name="placaVeiculo"
            className="form-control"
            maxLength="8"
            required
            value={transportador.placaVeiculo}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="row buttons-submit">
          <div className="col-md-8">
            <button type="submit" className="btn btn-primary btn-block">
              Alterar
            </button>
          </div>
          <div className="col-md-4">
            <Link to="/transportador" className="btn btn-dark btn-block">
              Cancelar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
