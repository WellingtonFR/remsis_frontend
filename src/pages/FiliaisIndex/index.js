import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import { FiTrash2, FiEdit, FiArrowUp } from "react-icons/fi";
import UseLoader from "../../hooks/UseLoader";

export default function FiliaisIndex() {
  const [loader, showLoader, hideLoader] = UseLoader();
  const [filiais, setFiliais] = useState([]);

  useEffect(() => {
    populateData();
  }, []);

  async function populateData() {
    showLoader();
    await api.get("filiais").then((response) => {
      hideLoader();
      setFiliais(response.data);
    });
  }

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
        showLoader();
        await api.delete(`/filiais/delete/${id}`).then(() => {
          populateData();
          hideLoader();
          Swal.fire({
            title: "Filial excluída com sucesso",
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
        title: "Erro ao excluir filial",
        text: data.message,
        icon: "error",
        showConfirmButton: false,
        timer: 1100,
      });
    }
  }

  //Botão de retorno ao topo página
  $(document).ready(function () {
    let btnSubir = $("#subirTopo");
    btnSubir.hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        btnSubir.fadeIn();
      } else {
        btnSubir.fadeOut();
      }
    });
  });

  function btnSubir(e) {
    e.preventDefault();
    $("html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
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
            {filiais.length === 0 ? (
              <tr>
                <td>Não há informações para exibir</td>
              </tr>
            ) : (
              filiais.map((filial) => (
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
              ))
            )}
          </tbody>
        </table>
      </div>
      <div id="subirTopo" onClick={btnSubir}>
        <FiArrowUp />
      </div>
      {loader}
    </div>
  );
}
