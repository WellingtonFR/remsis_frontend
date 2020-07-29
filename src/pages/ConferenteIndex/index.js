import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import { FiTrash2 } from "react-icons/fi";
import UseLoader from "../../hooks/UseLoader";

export default function FiliaisIndex() {
  const [loader, showLoader, hideLoader] = UseLoader();
  const [conferente, setConferente] = useState([]);

  useEffect(() => {
    populateData();
  }, []);

  async function populateData() {
    showLoader();
    await api.get("conferente").then((response) => {
      hideLoader();
      setConferente(response.data);
    });
  }

  async function excluirConferente(id) {
    try {
      const { value: userConfirmAction } = await Swal.fire({
        title: "Deseja excluir o conferente ?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Excluir",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#af0600",
      });
      if (userConfirmAction) {
        showLoader();
        await api.delete(`/conferente/delete/${id}`).then(() => {
          populateData();
          hideLoader();
          Swal.fire({
            title: "Conferente excluído com sucesso",
            icon: "success",
            showConfirmButton: false,
            timer: 1100,
          });
        });
      }
    } catch (err) {
      hideLoader();
      const { data } = err.response;
      Swal.fire({
        title: "Erro ao excluir conferente",
        text: data.message,
        icon: "error",
        showConfirmButton: false,
        timer: 1100,
      });
    }
  }

  return (
    <div className="lista-conferente container">
      <div className="cover-background">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>ID</th>
              <th colSpan="2" style={{ textAlign: "center" }}>
                Opções
              </th>
            </tr>
          </thead>
          <tbody>
            {conferente.length === 0 ? (
              <tr>
                <td>Não há informações para exibir</td>
              </tr>
            ) : (
              conferente.map((conferente) => (
                <tr key={conferente.id}>
                  <td>{conferente.nomeConferente}</td>
                  <td>{conferente.idConferente}</td>
                  <td className="form-buttons">
                    <FiTrash2
                      className="btn-custom btn-icon-excluir mt-1"
                      onClick={() => excluirConferente(conferente.id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {loader}
    </div>
  );
}
