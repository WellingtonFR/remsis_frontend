import React, { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import Swal from "sweetalert2";
import { FiTrash2, FiEdit } from "react-icons/fi";

export default function TransferenciaIndex() {
  const [transferencias, setTransferencias] = useState([]);
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [numeroControle, setNumeroControle] = useState("");
  const [numeroFilial, setNumeroFilial] = useState("");

  function loadData(e) {
    e.preventDefault();
    api.get("transferencia").then((response) => {
      setTransferencias(response.data);
    });
  }

  async function handleSearch(e) {
    e.preventDefault();

    const data = {
      initialDate,
      finalDate,
      numeroControle,
      numeroFilial,
    };

    try {
      await api.post("/transferencia/find", data).then((response) => {
        setTransferencias(response.data);
      });
    } catch (err) {
      const { data } = err.response;
      Swal.fire({
        title: "Atenção",
        text: data.message,
        icon: "info",
        confirmButtonText: "Voltar",
      });
    }
  }

  async function excluirtransferencia(id) {
    try {
      const { value: userConfirmAction } = await Swal.fire({
        title: "Deseja excluir essa transferência ?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Excluir",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#af0600",
      });
      if (userConfirmAction) {
        await api.delete(`/transferencia/delete/${id}`).then(() => {
          Swal.fire({
            title: "Transferência excluída com sucesso",
            icon: "success",
            showConfirmButton: false,
            timer: 1100,
          });
          var btnLoadData = document.querySelector("#btnLoadData");
          btnLoadData.click();
        });
      }
    } catch (err) {
      const { data } = err.response;
      Swal.fire({
        title: "Erro ao excluir transferência",
        text: data.message,
        icon: "error",
        showConfirmButton: false,
        timer: 1100,
      });
    }
  }

  return (
    <div className="lista-transferencias container-fluid">
      <div className="cover-background">
        <div className="lista-transferencias-search">
          <form onSubmit={handleSearch}>
            <div className="form-inline">
              <div className="input-group">
                <label
                  htmlFor="initialDate"
                  className="col-form-label ml-1 mr-2"
                >
                  Data inicial
                </label>
                <input
                  type="datetime"
                  name="initialDate"
                  className="form-control"
                  placeholder="dd/mm/aaaa"
                  maxLength="10"
                  onChange={(e) => setInitialDate(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="finalDate" className="ml-1 mr-2">
                  Data final
                </label>
                <input
                  type="datetime"
                  name="finalDate"
                  className="form-control"
                  placeholder="dd/mm/aaaa"
                  onChange={(e) => setFinalDate(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="numeroControle" className="ml-1 mr-2">
                  Nº controle
                </label>
                <input
                  type="text"
                  name="numeroControle"
                  maxLength="10"
                  className="form-control"
                  onChange={(e) => setNumeroControle(e.target.value)}
                ></input>
              </div>
              <div className="input-group">
                <label htmlFor="numeroFilial" className="ml-1 mr-2">
                  Nº Filial
                </label>
                <input
                  type="text"
                  name="numeroFilial"
                  className="form-control"
                  onChange={(e) => setNumeroFilial(e.target.value)}
                ></input>
              </div>
              <button type="submit" className="btn btn-primary ml-3">
                Pesquisar
              </button>
              <button
                onClick={loadData}
                className="btn btn-dark ml-1"
                id="btnLoadData"
              >
                Ver todos
              </button>
            </div>
          </form>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Data</th>
              <th>Nº Controle</th>
              <th>Unidade destino</th>
              <th>Transportador</th>
              <th>Filial origem</th>
              <th>Nota fiscal</th>
              <th colSpan="2" style={{ textAlign: "center" }}>
                Opções
              </th>
            </tr>
          </thead>
          <tbody>
            {transferencias.length === 0 ? (
              <tr>
                <td>Não há informações para exibir</td>
              </tr>
            ) : (
              transferencias.map((transferencia) => (
                <tr key={transferencia.id}>
                  <td>{transferencia.dataAtual}</td>
                  <td>{transferencia.numeroControle}</td>
                  <td>{transferencia.unidadeDestino}</td>
                  <td>{transferencia.transportador}</td>
                  <td>{transferencia.filialOrigem_1}</td>
                  <td>{transferencia.notaFiscal_1}</td>
                  <td className="form-buttons">
                    <Link to={`/transferencia/update/${transferencia.id}`}>
                      <FiEdit className="btn-icon-alterar mr-2 mt-1" />
                    </Link>
                    <FiTrash2
                      className="btn-icon-excluir mt-1"
                      onClick={() => excluirtransferencia(transferencia.id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
