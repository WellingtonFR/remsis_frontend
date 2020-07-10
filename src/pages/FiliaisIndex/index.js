import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import { FiTrash2, FiEdit } from "react-icons/fi";

export default function FiliaisIndex() {
  const [filiais, setFiliais] = useState([]);

  useEffect(() => {
    api.get("filiais").then((response) => {
      setFiliais(response.data);
    });
  });

  async function excluirFilial(id) {
    try {
      const { value: userConfirmAction } = await Swal.fire({
        title: "Deseja excluir essa filial ?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Excluir",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#af0600",
      });
      if (userConfirmAction) {
        await api.delete(`/filiais/delete/${id}`).then(() => {
          Swal.fire({
            title: "Filial excluída com sucesso",
            icon: "success",
            showConfirmButton: false,
            timer: 1100,
          });
        });
      }
    } catch (err) {
      const { data } = err.response;
      Swal.fire({
        title: "Erro ao excluir filial",
        text: data.message,
        icon: "error",
        showConfirmButton: false,
        timer: 1100,
      });
    }
  }

  return (
    <div className="lista-filiais container-fluid">
      <div className="cover-background">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Filial</th>
              <th>Endereço</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Nome fantasia</th>
              <th colSpan="2" style={{ textAlign: "center" }}>
                Opções
              </th>
            </tr>
          </thead>
          <tbody>
            {filiais.map((filial) => (
              <tr key={filial.id}>
                <td>{filial.numeroFilial}</td>
                <td>
                  {filial.endereco}, {filial.numeroEndereco}{" "}
                  {filial.complemento}
                </td>
                <td>{filial.cidade}</td>
                <td>{filial.estado}</td>
                <td>{filial.nomeFantasia}</td>
                <td className="form-buttons">
                  <Link to={`/filiais/update/${filial.id}`}>
                    <FiEdit className="btn-icon-alterar mr-2 mt-1" />
                  </Link>
                  <FiTrash2
                    className="btn-icon-excluir mt-1"
                    onClick={() => excluirFilial(filial.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
