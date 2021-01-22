import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import UseLoader from "../../hooks/UseLoader";

export default function TransferenciaUpdate() {
  const [loader, showLoader, hideLoader] = UseLoader();
  const [transferencia, setTransferencia] = useState([]);
  const [transportadores, setTransportadores] = useState([]); //Preenche o option
  const [transportador, setTransportador] = useState([]); //Informação a ser salva no banco
  const [conferente, setConferente] = useState([]); //Informação a ser salva no banco
  const [conferentes, setConferentes] = useState([]); //Preenche o option
  const [placaVeiculo, setPlacaVeiculo] = useState("");

  const tipoOptions = [
    "PORTARIA",
    "DQS - PRODUTO CLIENTE",
    "DQS - PRODUTO ESTOQUE",
    "REMESSA DE PEÇA",
    "TRANSFERÊNCIA ENTRE LOJA",
    "TRANSFERÊNCIA IMOBILIZADO",
    "SUP - MATERIAL PROMOCIONAL",
    "SITE - VENDA",
    "SITE - CANCELAMENTO",
    "SUP - USO E CONSUMO",
  ];

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    populateData();
  }, []);

  async function populateData() {
    showLoader();
    await api.get(`/transferencia/findById/${id}`).then((response) => {
      hideLoader();
      setTransferencia(response.data[0]);
      api
        .get(
          `/transportador/findByFilialAtendida/${response.data[0].unidadeDestino}`
        )
        .then((response) => {
          hideLoader();
          setTransportadores(response.data);
        });
    });
    fetchDataToOptions();
  }

  async function fetchDataToOptions() {
    showLoader();
    await api.get("transportador").then((response) => {
      setTransportadores(response.data);
    });
    await api.get("conferente").then((response) => {
      hideLoader();
      setConferentes(response.data);
    });
  }

  async function handleTransportador(optionValue) {
    showLoader();
    await api.get(`/transportador/findById/${optionValue}`).then((response) => {
      hideLoader();
      setPlacaVeiculo(response.data[0].placaVeiculo);
      setTransportador(response.data[0].nomeTransportador);
    });
  }

  const handleInputChange = (e) => {
    e.persist();
    setTransferencia({ ...transferencia, [e.target.name]: e.target.value });
  };

  async function handleNewTransferencia(e) {
    e.preventDefault();

    const data = {
      dataAtual: transferencia.dataAtual,
      numeroControle: transferencia.numeroControle,
      unidadeDestino: transferencia.unidadeDestino,
      nomeUnidadeDestino: transferencia.nomeUnidadeDestino,
      enderecoUnidadeDestino: transferencia.enderecoUnidadeDestino,
      transportador: transportador,
      placaVeiculo: placaVeiculo,
      conferente: conferente,
      //
      filialOrigem_1: transferencia.filialOrigem_1,
      notaFiscal_1: transferencia.notaFiscal_1,
      tipoOperacao_1: transferencia.tipoOperacao_1,
      codigo_1: transferencia.codigo_1,
      descricaoProduto_1: transferencia.descricaoProduto_1,
      quantidadeProduto_1: transferencia.quantidadeProduto_1,
      observacao_1: transferencia.observacao_1,
      //
      filialOrigem_2: transferencia.filialOrigem_2,
      notaFiscal_2: transferencia.notaFiscal_2,
      tipoOperacao_2: transferencia.tipoOperacao_2,
      codigo_2: transferencia.codigo_2,
      descricaoProduto_2: transferencia.descricaoProduto_2,
      quantidadeProduto_2: transferencia.quantidadeProduto_2,
      observacao_2: transferencia.observacao_2,
      //
      filialOrigem_3: transferencia.filialOrigem_3,
      notaFiscal_3: transferencia.notaFiscal_3,
      tipoOperacao_3: transferencia.tipoOperacao_3,
      codigo_3: transferencia.codigo_3,
      descricaoProduto_3: transferencia.descricaoProduto_3,
      quantidadeProduto_3: transferencia.quantidadeProduto_3,
      observacao_3: transferencia.observacao_3,
      //
      filialOrigem_4: transferencia.filialOrigem_4,
      notaFiscal_4: transferencia.notaFiscal_4,
      tipoOperacao_4: transferencia.tipoOperacao_4,
      codigo_4: transferencia.codigo_4,
      descricaoProduto_4: transferencia.descricaoProduto_4,
      quantidadeProduto_4: transferencia.quantidadeProduto_4,
      observacao_4: transferencia.observacao_4,
      //
      filialOrigem_5: transferencia.filialOrigem_5,
      notaFiscal_5: transferencia.notaFiscal_5,
      tipoOperacao_5: transferencia.tipoOperacao_5,
      codigo_5: transferencia.codigo_5,
      descricaoProduto_5: transferencia.descricaoProduto_5,
      quantidadeProduto_5: transferencia.quantidadeProduto_5,
      observacao_5: transferencia.observacao_5,
      //
      filialOrigem_6: transferencia.filialOrigem_6,
      notaFiscal_6: transferencia.notaFiscal_6,
      tipoOperacao_6: transferencia.tipoOperacao_6,
      codigo_6: transferencia.codigo_6,
      descricaoProduto_6: transferencia.descricaoProduto_6,
      quantidadeProduto_6: transferencia.quantidadeProduto_6,
      observacao_6: transferencia.observacao_6,
      //
      filialOrigem_7: transferencia.filialOrigem_7,
      notaFiscal_7: transferencia.notaFiscal_7,
      tipoOperacao_7: transferencia.tipoOperacao_7,
      codigo_7: transferencia.codigo_7,
      descricaoProduto_7: transferencia.descricaoProduto_7,
      quantidadeProduto_7: transferencia.quantidadeProduto_7,
      observacao_7: transferencia.observacao_7,
      //
      filialOrigem_8: transferencia.filialOrigem_8,
      notaFiscal_8: transferencia.notaFiscal_8,
      tipoOperacao_8: transferencia.tipoOperacao_8,
      codigo_8: transferencia.codigo_8,
      descricaoProduto_8: transferencia.descricaoProduto_8,
      quantidadeProduto_8: transferencia.quantidadeProduto_8,
      observacao_8: transferencia.observacao_8,
      //
      filialOrigem_9: transferencia.filialOrigem_9,
      notaFiscal_9: transferencia.notaFiscal_9,
      tipoOperacao_9: transferencia.tipoOperacao_9,
      codigo_9: transferencia.codigo_9,
      descricaoProduto_9: transferencia.descricaoProduto_9,
      quantidadeProduto_9: transferencia.quantidadeProduto_9,
      observacao_9: transferencia.observacao_9,
      //
      filialOrigem_10: transferencia.filialOrigem_10,
      notaFiscal_10: transferencia.notaFiscal_10,
      tipoOperacao_10: transferencia.tipoOperacao_10,
      codigo_10: transferencia.codigo_10,
      descricaoProduto_10: transferencia.descricaoProduto_10,
      quantidadeProduto_10: transferencia.quantidadeProduto_10,
      observacao_10: transferencia.observacao_10,
      //
      filialOrigem_11: transferencia.filialOrigem_11,
      notaFiscal_11: transferencia.notaFiscal_11,
      tipoOperacao_11: transferencia.tipoOperacao_11,
      codigo_11: transferencia.codigo_11,
      descricaoProduto_11: transferencia.descricaoProduto_11,
      quantidadeProduto_11: transferencia.quantidadeProduto_11,
      observacao_11: transferencia.observacao_11,
      //
      filialOrigem_12: transferencia.filialOrigem_12,
      notaFiscal_12: transferencia.notaFiscal_12,
      tipoOperacao_12: transferencia.tipoOperacao_12,
      codigo_12: transferencia.codigo_12,
      descricaoProduto_12: transferencia.descricaoProduto_12,
      quantidadeProduto_12: transferencia.quantidadeProduto_12,
      observacao_12: transferencia.observacao_12,
      //
      filialOrigem_13: transferencia.filialOrigem_13,
      notaFiscal_13: transferencia.notaFiscal_13,
      tipoOperacao_13: transferencia.tipoOperacao_13,
      codigo_13: transferencia.codigo_13,
      descricaoProduto_13: transferencia.descricaoProduto_13,
      quantidadeProduto_13: transferencia.quantidadeProduto_13,
      observacao_13: transferencia.observacao_13,
      //
      filialOrigem_14: transferencia.filialOrigem_14,
      notaFiscal_14: transferencia.notaFiscal_14,
      tipoOperacao_14: transferencia.tipoOperacao_14,
      codigo_14: transferencia.codigo_14,
      descricaoProduto_14: transferencia.descricaoProduto_14,
      quantidadeProduto_14: transferencia.quantidadeProduto_14,
      observacao_14: transferencia.observacao_14,
      //
      filialOrigem_15: transferencia.filialOrigem_15,
      notaFiscal_15: transferencia.notaFiscal_15,
      tipoOperacao_15: transferencia.tipoOperacao_15,
      codigo_15: transferencia.codigo_15,
      descricaoProduto_15: transferencia.descricaoProduto_15,
      quantidadeProduto_15: transferencia.quantidadeProduto_15,
      observacao_15: transferencia.observacao_15,
      //
      filialOrigem_16: transferencia.filialOrigem_16,
      notaFiscal_16: transferencia.notaFiscal_16,
      tipoOperacao_16: transferencia.tipoOperacao_16,
      codigo_16: transferencia.codigo_16,
      descricaoProduto_16: transferencia.descricaoProduto_16,
      quantidadeProduto_16: transferencia.quantidadeProduto_16,
      observacao_16: transferencia.observacao_16,
      //
      filialOrigem_17: transferencia.filialOrigem_17,
      notaFiscal_17: transferencia.notaFiscal_17,
      tipoOperacao_17: transferencia.tipoOperacao_17,
      codigo_17: transferencia.codigo_17,
      descricaoProduto_17: transferencia.descricaoProduto_17,
      quantidadeProduto_17: transferencia.quantidadeProduto_17,
      observacao_17: transferencia.observacao_17,
      //
      filialOrigem_18: transferencia.filialOrigem_18,
      notaFiscal_18: transferencia.notaFiscal_18,
      tipoOperacao_18: transferencia.tipoOperacao_18,
      codigo_18: transferencia.codigo_18,
      descricaoProduto_18: transferencia.descricaoProduto_18,
      quantidadeProduto_18: transferencia.quantidadeProduto_18,
      observacao_18: transferencia.observacao_18,
      //
      filialOrigem_19: transferencia.filialOrigem_19,
      notaFiscal_19: transferencia.notaFiscal_19,
      tipoOperacao_19: transferencia.tipoOperacao_19,
      codigo_19: transferencia.codigo_19,
      descricaoProduto_19: transferencia.descricaoProduto_19,
      quantidadeProduto_19: transferencia.quantidadeProduto_19,
      observacao_19: transferencia.observacao_19,
      //
      filialOrigem_20: transferencia.filialOrigem_20,
      notaFiscal_20: transferencia.notaFiscal_20,
      tipoOperacao_20: transferencia.tipoOperacao_20,
      codigo_20: transferencia.codigo_20,
      descricaoProduto_20: transferencia.descricaoProduto_20,
      quantidadeProduto_20: transferencia.quantidadeProduto_20,
      observacao_20: transferencia.observacao_20,
    };

    try {
      showLoader();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      await api.put(`/transferencia/update/${id}`, data).then(() => {
        hideLoader();
        Swal.fire({
          title: "Alterado com sucesso !",
          confirmButtonText: "Gerar relatório",
          icon: "success",
          preConfirm: () => {
            document.querySelector("form").reset();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            history.push(`/transferencia/report/${id}`);
          },
        });
      });
    } catch (err) {
      hideLoader();
      const { data } = err.response;
      Swal.fire({
        title: "Erro ao inserir",
        text: data.message,
        icon: "error",
        confirmButtonText: "Voltar",
      });
    }
  }

  return (
    <div className="transferencia container-fluid">
      <h1>Alterar transferência</h1>
      <small>Altere os informações e clique em salvar</small>
      <form onSubmit={handleNewTransferencia}>
        <div className="transfereciaCreate container">
          <hr />
          <div className="row">
            <div className="col-sm-3 mb-2 pr-2">
              <label htmlFor="dataAtual">Data</label>
              <input
                type="text"
                name="dataAtual"
                className="form-control disabled"
                disabled
                value={transferencia.dataAtual}
              />
            </div>
            <div className="col-sm-7"></div>
            <div className="col-sm-2 mb-2">
              <label htmlFor="numeroControle">Controle</label>
              <input
                type="text"
                name="numeroControle"
                className="form-control disabled"
                value={transferencia.numeroControle}
                disabled
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3 mb-2 pr-2">
              <label htmlFor="unidadeDestino">Unidade destino</label>
              <input
                name="unidadeDestino"
                className="form-control disabled"
                value={transferencia.unidadeDestino}
                disabled
              />
            </div>

            <div className="col-sm-3 mb-2">
              <label htmlFor="nomeUnidadeDestino">Nome</label>
              <input
                name="nomeUnidadeDestino"
                type="text"
                className="form-control disabled"
                value={transferencia.nomeUnidadeDestino}
                disabled
              />
            </div>

            <div className="col-sm-6 mb-2">
              <label htmlFor="enderecoUnidadeDestino">Endereço</label>
              <input
                name="enderecoUnidadeDestino"
                type="text"
                className="form-control disabled"
                value={transferencia.enderecoUnidadeDestino}
                disabled
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3 mb-2">
              <label htmlFor="transportador">Transportador</label>
              <select
                name="transportador"
                className="form-control"
                required
                onChange={(e) => handleTransportador(e.target.value)}
              >
                <option value="">Selecione</option>
                {transportadores.map((transportador) => (
                  <option value={transportador.id} key={transportador.id}>
                    {transportador.filialAtendida +
                      " " +
                      transportador.nomeTransportador}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-2 mb-2">
              <label htmlFor="placaVeiculo">Placa do veículo</label>
              <input
                type="text"
                name="placaVeiculo"
                className="form-control"
                value={placaVeiculo}
                disabled
                required
              />
            </div>

            <div className="col-sm-3">
              <label htmlFor="nomeConferente">Conferente</label>
              <select
                name="nomeConferente"
                className="form-control"
                required
                onChange={(e) => setConferente(e.target.value)}
              >
                <option value="">Selecione</option>
                {conferentes.map((conferente) => (
                  <option value={conferente.nomeConferente} key={conferente.id}>
                    {conferente.nomeConferente}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-1 mb-2 mt-2 mr-2">
              <Link
                to="/transferencia"
                className="btn btn-dark"
                style={{
                  height: "50px",
                  display: "flexbox",
                  paddingTop: "0.75rem",
                }}
              >
                Cancelar
              </Link>
            </div>

            <div className="col-sm-2 mb-2 mt-2">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ height: "50px", width: "150px" }}
              >
                Salvar
              </button>
            </div>
          </div>

          <div className="formLines">
            <div className="row Head">
              <div className="col-sm-1 mr-2 mb-1 p-0">Filial origem</div>
              <div className="col-sm-1 mr-2 mb-1 p-0">Nota fiscal</div>
              <div className="col-sm-1 mr-2 mb-1 p-0">Tipo</div>
              <div className="col-sm-1 mr-2 mb-1 p-0">Código</div>
              <div className="col-sm-3 mr-2 mb-1 p-0">Descrição</div>
              <div className="col-sm-1 mr-2 mb-1 p-0">Quantidade</div>
              <div className="col-sm-3 mr-2 mb-1 p-0">Observação</div>
            </div>

            {/*Line1*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_1"
                  className="form-control"
                  required
                  value={transferencia.filialOrigem_1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_1"
                  className="form-control"
                  required
                  value={transferencia.notaFiscal_1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_1"
                  className="form-control"
                  required
                  value={transferencia.tipoOperacao_1}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_1"
                  className="form-control"
                  required
                  value={transferencia.codigo_1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_1"
                  className="form-control"
                  required
                  value={transferencia.descricaoProduto_1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_1"
                  className="form-control"
                  required
                  value={transferencia.quantidadeProduto_1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_1"
                  className="form-control"
                  required
                  value={transferencia.observacao_1}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line2*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_2"
                  className="form-control"
                  value={transferencia.filialOrigem_2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_2"
                  className="form-control"
                  value={transferencia.notaFiscal_2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_2"
                  className="form-control"
                  value={transferencia.tipoOperacao_2}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_2"
                  className="form-control"
                  value={transferencia.codigo_2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_2"
                  className="form-control"
                  value={transferencia.descricaoProduto_2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_2"
                  className="form-control"
                  value={transferencia.quantidadeProduto_2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_2"
                  className="form-control"
                  value={transferencia.observacao_2}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line3*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_3"
                  className="form-control"
                  value={transferencia.filialOrigem_3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_3"
                  className="form-control"
                  value={transferencia.notaFiscal_3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_3"
                  className="form-control"
                  value={transferencia.tipoOperacao_3}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_3"
                  className="form-control"
                  value={transferencia.codigo_3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_3"
                  className="form-control"
                  value={transferencia.descricaoProduto_3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_3"
                  className="form-control"
                  value={transferencia.quantidadeProduto_3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_3"
                  className="form-control"
                  value={transferencia.observacao_3}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line4*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_4"
                  className="form-control"
                  value={transferencia.filialOrigem_4}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_4"
                  className="form-control"
                  value={transferencia.notaFiscal_4}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_4"
                  className="form-control"
                  value={transferencia.tipoOperacao_4}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_4"
                  className="form-control"
                  value={transferencia.codigo_4}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_4"
                  className="form-control"
                  value={transferencia.descricaoProduto_4}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_4"
                  className="form-control"
                  value={transferencia.quantidadeProduto_4}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_4"
                  className="form-control"
                  value={transferencia.observacao_4}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line5*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_5"
                  className="form-control"
                  value={transferencia.filialOrigem_5}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_5"
                  className="form-control"
                  value={transferencia.notaFiscal_5}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_5"
                  className="form-control"
                  value={transferencia.tipoOperacao_5}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_5"
                  className="form-control"
                  value={transferencia.codigo_5}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_5"
                  className="form-control"
                  value={transferencia.descricaoProduto_5}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_5"
                  className="form-control"
                  value={transferencia.quantidadeProduto_5}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_5"
                  className="form-control"
                  value={transferencia.observacao_5}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line6*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_6"
                  className="form-control"
                  value={transferencia.filialOrigem_6}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_6"
                  className="form-control"
                  value={transferencia.notaFiscal_6}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_6"
                  className="form-control"
                  value={transferencia.tipoOperacao_6}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_6"
                  className="form-control"
                  value={transferencia.codigo_6}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_6"
                  className="form-control"
                  value={transferencia.descricaoProduto_6}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_6"
                  className="form-control"
                  value={transferencia.quantidadeProduto_6}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_6"
                  className="form-control"
                  value={transferencia.observacao_6}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line7*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_7"
                  className="form-control"
                  value={transferencia.filialOrigem_7}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_7"
                  className="form-control"
                  value={transferencia.notaFiscal_7}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_7"
                  className="form-control"
                  value={transferencia.tipoOperacao_7}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_7"
                  className="form-control"
                  value={transferencia.codigo_7}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_7"
                  className="form-control"
                  value={transferencia.descricaoProduto_7}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_7"
                  className="form-control"
                  value={transferencia.quantidadeProduto_7}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_7"
                  className="form-control"
                  value={transferencia.observacao_7}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line8*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_8"
                  className="form-control"
                  value={transferencia.filialOrigem_8}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_8"
                  className="form-control"
                  value={transferencia.notaFiscal_8}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_8"
                  className="form-control"
                  value={transferencia.tipoOperacao_8}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_8"
                  className="form-control"
                  value={transferencia.codigo_8}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_8"
                  className="form-control"
                  value={transferencia.descricaoProduto_8}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_8"
                  className="form-control"
                  value={transferencia.quantidadeProduto_8}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_8"
                  className="form-control"
                  value={transferencia.observacao_8}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line9*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_9"
                  className="form-control"
                  value={transferencia.filialOrigem_9}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_9"
                  className="form-control"
                  value={transferencia.notaFiscal_9}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_9"
                  className="form-control"
                  value={transferencia.tipoOperacao_9}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_9"
                  className="form-control"
                  value={transferencia.codigo_9}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_9"
                  className="form-control"
                  value={transferencia.descricaoProduto_9}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_9"
                  className="form-control"
                  value={transferencia.quantidadeProduto_9}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_9"
                  className="form-control"
                  value={transferencia.observacao_9}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line10*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_10"
                  className="form-control"
                  value={transferencia.filialOrigem_10}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_10"
                  className="form-control"
                  value={transferencia.notaFiscal_10}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_10"
                  className="form-control"
                  value={transferencia.tipoOperacao_10}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_10"
                  className="form-control"
                  value={transferencia.codigo_10}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_10"
                  className="form-control"
                  value={transferencia.descricaoProduto_10}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_10"
                  className="form-control"
                  value={transferencia.quantidadeProduto_10}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_10"
                  className="form-control"
                  value={transferencia.observacao_10}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/*Line11*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_11"
                  className="form-control"
                  value={transferencia.filialOrigem_11}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_11"
                  className="form-control"
                  value={transferencia.notaFiscal_11}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_11"
                  className="form-control"
                  value={transferencia.tipoOperacao_11}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_11"
                  className="form-control"
                  value={transferencia.codigo_11}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_11"
                  className="form-control"
                  value={transferencia.descricaoProduto_11}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_11"
                  className="form-control"
                  value={transferencia.quantidadeProduto_11}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_11"
                  className="form-control"
                  value={transferencia.observacao_11}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line12*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_12"
                  className="form-control"
                  value={transferencia.filialOrigem_12}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_12"
                  className="form-control"
                  value={transferencia.notaFiscal_12}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_12"
                  className="form-control"
                  value={transferencia.tipoOperacao_12}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_12"
                  className="form-control"
                  value={transferencia.codigo_12}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_12"
                  className="form-control"
                  value={transferencia.descricaoProduto_12}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_12"
                  className="form-control"
                  value={transferencia.quantidadeProduto_12}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_12"
                  className="form-control"
                  value={transferencia.observacao_12}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line13*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_13"
                  className="form-control"
                  value={transferencia.filialOrigem_13}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_13"
                  className="form-control"
                  value={transferencia.notaFiscal_13}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_13"
                  className="form-control"
                  value={transferencia.tipoOperacao_13}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_13"
                  className="form-control"
                  value={transferencia.codigo_13}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_13"
                  className="form-control"
                  value={transferencia.descricaoProduto_13}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_13"
                  className="form-control"
                  value={transferencia.quantidadeProduto_13}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_13"
                  className="form-control"
                  value={transferencia.observacao_13}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line14*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_14"
                  className="form-control"
                  value={transferencia.filialOrigem_14}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_14"
                  className="form-control"
                  value={transferencia.notaFiscal_14}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_14"
                  className="form-control"
                  value={transferencia.tipoOperacao_14}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_14"
                  className="form-control"
                  value={transferencia.codigo_14}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_14"
                  className="form-control"
                  value={transferencia.descricaoProduto_14}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_14"
                  className="form-control"
                  value={transferencia.quantidadeProduto_14}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_14"
                  className="form-control"
                  value={transferencia.observacao_14}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line15*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_15"
                  className="form-control"
                  value={transferencia.filialOrigem_15}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_15"
                  className="form-control"
                  value={transferencia.notaFiscal_15}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_15"
                  className="form-control"
                  value={transferencia.tipoOperacao_15}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_15"
                  className="form-control"
                  value={transferencia.codigo_15}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_15"
                  className="form-control"
                  value={transferencia.descricaoProduto_15}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_15"
                  className="form-control"
                  value={transferencia.quantidadeProduto_15}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_15"
                  className="form-control"
                  value={transferencia.observacao_15}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line16*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_16"
                  className="form-control"
                  value={transferencia.filialOrigem_16}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_16"
                  className="form-control"
                  value={transferencia.notaFiscal_16}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_16"
                  className="form-control"
                  value={transferencia.tipoOperacao_16}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_16"
                  className="form-control"
                  value={transferencia.codigo_16}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_16"
                  className="form-control"
                  value={transferencia.descricaoProduto_16}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_16"
                  className="form-control"
                  value={transferencia.quantidadeProduto_16}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_16"
                  className="form-control"
                  value={transferencia.observacao_16}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line17*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_17"
                  className="form-control"
                  value={transferencia.filialOrigem_17}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_17"
                  className="form-control"
                  value={transferencia.notaFiscal_17}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_17"
                  className="form-control"
                  value={transferencia.tipoOperacao_17}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_17"
                  className="form-control"
                  value={transferencia.codigo_17}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_17"
                  className="form-control"
                  value={transferencia.descricaoProduto_17}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_17"
                  className="form-control"
                  value={transferencia.quantidadeProduto_17}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_17"
                  className="form-control"
                  value={transferencia.observacao_17}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line18*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_18"
                  className="form-control"
                  value={transferencia.filialOrigem_18}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_18"
                  className="form-control"
                  value={transferencia.notaFiscal_18}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_18"
                  className="form-control"
                  value={transferencia.tipoOperacao_18}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_18"
                  className="form-control"
                  value={transferencia.codigo_18}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_18"
                  className="form-control"
                  value={transferencia.descricaoProduto_18}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_18"
                  className="form-control"
                  value={transferencia.quantidadeProduto_18}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_18"
                  className="form-control"
                  value={transferencia.observacao_18}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line19*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_19"
                  className="form-control"
                  value={transferencia.filialOrigem_19}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_19"
                  className="form-control"
                  value={transferencia.notaFiscal_19}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_19"
                  className="form-control"
                  value={transferencia.tipoOperacao_19}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_19"
                  className="form-control"
                  value={transferencia.codigo_19}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_19"
                  className="form-control"
                  value={transferencia.descricaoProduto_19}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_19"
                  className="form-control"
                  value={transferencia.quantidadeProduto_19}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_19"
                  className="form-control"
                  value={transferencia.observacao_19}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*Line20*/}
            <div className="row">
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_20"
                  className="form-control"
                  value={transferencia.filialOrigem_20}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_20"
                  className="form-control"
                  value={transferencia.notaFiscal_20}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_20"
                  className="form-control"
                  value={transferencia.tipoOperacao_20}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_20"
                  className="form-control"
                  value={transferencia.codigo_20}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_20"
                  className="form-control"
                  value={transferencia.descricaoProduto_20}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_20"
                  className="form-control"
                  value={transferencia.quantidadeProduto_20}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_20"
                  className="form-control"
                  value={transferencia.observacao_20}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/*formBottomLines*/}
          </div>
          {/*transferenciaCreate*/}
        </div>
      </form>
      {loader}
    </div>
  );
}
