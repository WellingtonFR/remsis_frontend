import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import { FiTrash2, FiEdit, FiArrowUp } from "react-icons/fi";
import UseLoader from "../../hooks/UseLoader";

export default function TransportadorIndex() {
  const [loader, showLoader, hideLoader] = UseLoader();
  const [transportador, setTransportador] = useState([]);
  const [filialAtendida, setFilialAtendida] = useState([]);

  useEffect(() => {
    populateData();
  }, []);

  async function populateData() {
    showLoader();
    await api.get("transportador").then((response) => {
      hideLoader();
      setTransportador(response.data);
    });
  }

  async function excluirTransportador(id) {
    try {
      const { value: userConfirmAction } = await Swal.fire({
        title: "Deseja excluir o transportador ?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Excluir",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#af0600",
      });
      if (userConfirmAction) {
        showLoader();
        await api.delete(`/transportador/delete/${id}`).then(() => {
          populateData();
          hideLoader();
          Swal.fire({
            title: "Transportador excluído com sucesso",
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
        title: "Erro ao excluir transportador",
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
    <div className="lista-transportadores container">
      <div className="cover-background">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Placa</th>
              <th>Filial atendida</th>
              <th
                colSpan="2"
                style={{
                  textAlign: "center",
                }}
              >
                Opções
              </th>
            </tr>
          </thead>
          <tbody>
            {transportador.length === 0 ? (
              <tr>
                <td>Não há informações para exibir</td>
              </tr>
            ) : (
              transportador.map((transportador) => (
                <tr key={transportador.id}>
                  <td>{transportador.nomeTransportador}</td>
                  <td>{transportador.placaVeiculo}</td>
                  <td>{transportador.filialAtendida}</td>
                  <td className="form-buttons">
                    <Link to={`/transportador/update/${transportador.id}`}>
                      <FiEdit className="btn-custom btn-icon-alterar mr-2 mt-1" />
                    </Link>
                    <FiTrash2
                      className="btn-custom btn-icon-excluir mt-1"
                      onClick={() =>
                        excluirTransportador(`${transportador.id}`)
                      }
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
