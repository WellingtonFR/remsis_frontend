import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";
import { FiPlusCircle } from "react-icons/fi";
import "./styles.css";
import api from "../../services/api";
import UseLoader from "../../hooks/UseLoader";

export default function TransferenciaCreate() {
  //#region useState
  const [filiais, setFiliais] = useState([]); //Preenche o option com as filiais
  //Parte superior do formulário
  const [dataAtual] = useState(moment().format("DD/MM/YYYY"));
  const [numeroControle] = useState(generateId(10));
  const [unidadeDestino, setUnidadeDestino] = useState("");
  const [nomeUnidadeDestino, setNomeUnidadeDestino] = useState("");
  const [enderecoUnidadeDestino, setEnderecoUnidadeDestino] = useState("");
  const [transportadores, setTransportadores] = useState([]); //Preenche o option
  const [transportador, setTransportador] = useState(""); //para saída dos dados ao submeter
  const [placaVeiculo, setPlacaVeiculo] = useState("");
  const [conferente, setConferente] = useState(""); //Preenche o option
  const [conferentes, setConferentes] = useState([]); //para saída dos dados ao submeter
  //Linhas
  const [filialOrigem_1, setFilialorigem_1] = useState("");
  const [notaFiscal_1, setNotafiscal_1] = useState("");
  const [tipoOperacao_1, setTipoOperacao_1] = useState("");
  const [codigo_1, setCodigo_1] = useState("");
  const [descricaoProduto_1, setDescricaoProduto_1] = useState("");
  const [quantidadeProduto_1, setQuantidadeproduto_1] = useState("");
  const [observacao_1, setObservacao_1] = useState("");
  //
  const [filialOrigem_2, setFilialorigem_2] = useState("");
  const [notaFiscal_2, setNotafiscal_2] = useState("");
  const [tipoOperacao_2, setTipoOperacao_2] = useState("");
  const [codigo_2, setCodigo_2] = useState("");
  const [descricaoProduto_2, setDescricaoProduto_2] = useState("");
  const [quantidadeProduto_2, setQuantidadeproduto_2] = useState("");
  const [observacao_2, setObservacao_2] = useState("");
  //
  const [filialOrigem_3, setFilialorigem_3] = useState("");
  const [notaFiscal_3, setNotafiscal_3] = useState("");
  const [tipoOperacao_3, setTipoOperacao_3] = useState("");
  const [codigo_3, setCodigo_3] = useState("");
  const [descricaoProduto_3, setDescricaoProduto_3] = useState("");
  const [quantidadeProduto_3, setQuantidadeproduto_3] = useState("");
  const [observacao_3, setObservacao_3] = useState("");
  //
  const [filialOrigem_4, setFilialorigem_4] = useState("");
  const [notaFiscal_4, setNotafiscal_4] = useState("");
  const [tipoOperacao_4, setTipoOperacao_4] = useState("");
  const [codigo_4, setCodigo_4] = useState("");
  const [descricaoProduto_4, setDescricaoProduto_4] = useState("");
  const [quantidadeProduto_4, setQuantidadeproduto_4] = useState("");
  const [observacao_4, setObservacao_4] = useState("");
  //
  const [filialOrigem_5, setFilialorigem_5] = useState("");
  const [notaFiscal_5, setNotafiscal_5] = useState("");
  const [tipoOperacao_5, setTipoOperacao_5] = useState("");
  const [codigo_5, setCodigo_5] = useState("");
  const [descricaoProduto_5, setDescricaoProduto_5] = useState("");
  const [quantidadeProduto_5, setQuantidadeproduto_5] = useState("");
  const [observacao_5, setObservacao_5] = useState("");
  //
  const [filialOrigem_6, setFilialorigem_6] = useState("");
  const [notaFiscal_6, setNotafiscal_6] = useState("");
  const [tipoOperacao_6, setTipoOperacao_6] = useState("");
  const [codigo_6, setCodigo_6] = useState("");
  const [descricaoProduto_6, setDescricaoProduto_6] = useState("");
  const [quantidadeProduto_6, setQuantidadeproduto_6] = useState("");
  const [observacao_6, setObservacao_6] = useState("");
  //
  const [filialOrigem_7, setFilialorigem_7] = useState("");
  const [notaFiscal_7, setNotafiscal_7] = useState("");
  const [tipoOperacao_7, setTipoOperacao_7] = useState("");
  const [codigo_7, setCodigo_7] = useState("");
  const [descricaoProduto_7, setDescricaoProduto_7] = useState("");
  const [quantidadeProduto_7, setQuantidadeproduto_7] = useState("");
  const [observacao_7, setObservacao_7] = useState("");
  //
  const [filialOrigem_8, setFilialorigem_8] = useState("");
  const [notaFiscal_8, setNotafiscal_8] = useState("");
  const [tipoOperacao_8, setTipoOperacao_8] = useState("");
  const [codigo_8, setCodigo_8] = useState("");
  const [descricaoProduto_8, setDescricaoProduto_8] = useState("");
  const [quantidadeProduto_8, setQuantidadeproduto_8] = useState("");
  const [observacao_8, setObservacao_8] = useState("");
  //
  const [filialOrigem_9, setFilialorigem_9] = useState("");
  const [notaFiscal_9, setNotafiscal_9] = useState("");
  const [tipoOperacao_9, setTipoOperacao_9] = useState("");
  const [codigo_9, setCodigo_9] = useState("");
  const [descricaoProduto_9, setDescricaoProduto_9] = useState("");
  const [quantidadeProduto_9, setQuantidadeproduto_9] = useState("");
  const [observacao_9, setObservacao_9] = useState("");
  //
  const [filialOrigem_10, setFilialorigem_10] = useState("");
  const [notaFiscal_10, setNotafiscal_10] = useState("");
  const [tipoOperacao_10, setTipoOperacao_10] = useState("");
  const [codigo_10, setCodigo_10] = useState("");
  const [descricaoProduto_10, setDescricaoProduto_10] = useState("");
  const [quantidadeProduto_10, setQuantidadeproduto_10] = useState("");
  const [observacao_10, setObservacao_10] = useState("");
  //
  const [filialOrigem_11, setFilialorigem_11] = useState("");
  const [notaFiscal_11, setNotafiscal_11] = useState("");
  const [tipoOperacao_11, setTipoOperacao_11] = useState("");
  const [codigo_11, setCodigo_11] = useState("");
  const [descricaoProduto_11, setDescricaoProduto_11] = useState("");
  const [quantidadeProduto_11, setQuantidadeproduto_11] = useState("");
  const [observacao_11, setObservacao_11] = useState("");
  //
  const [filialOrigem_12, setFilialorigem_12] = useState("");
  const [notaFiscal_12, setNotafiscal_12] = useState("");
  const [tipoOperacao_12, setTipoOperacao_12] = useState("");
  const [codigo_12, setCodigo_12] = useState("");
  const [descricaoProduto_12, setDescricaoProduto_12] = useState("");
  const [quantidadeProduto_12, setQuantidadeproduto_12] = useState("");
  const [observacao_12, setObservacao_12] = useState("");
  //
  const [filialOrigem_13, setFilialorigem_13] = useState("");
  const [notaFiscal_13, setNotafiscal_13] = useState("");
  const [tipoOperacao_13, setTipoOperacao_13] = useState("");
  const [codigo_13, setCodigo_13] = useState("");
  const [descricaoProduto_13, setDescricaoProduto_13] = useState("");
  const [quantidadeProduto_13, setQuantidadeproduto_13] = useState("");
  const [observacao_13, setObservacao_13] = useState("");
  //
  const [filialOrigem_14, setFilialorigem_14] = useState("");
  const [notaFiscal_14, setNotafiscal_14] = useState("");
  const [tipoOperacao_14, setTipoOperacao_14] = useState("");
  const [codigo_14, setCodigo_14] = useState("");
  const [descricaoProduto_14, setDescricaoProduto_14] = useState("");
  const [quantidadeProduto_14, setQuantidadeproduto_14] = useState("");
  const [observacao_14, setObservacao_14] = useState("");
  //
  const [filialOrigem_15, setFilialorigem_15] = useState("");
  const [notaFiscal_15, setNotafiscal_15] = useState("");
  const [tipoOperacao_15, setTipoOperacao_15] = useState("");
  const [codigo_15, setCodigo_15] = useState("");
  const [descricaoProduto_15, setDescricaoProduto_15] = useState("");
  const [quantidadeProduto_15, setQuantidadeproduto_15] = useState("");
  const [observacao_15, setObservacao_15] = useState("");
  //
  const [filialOrigem_16, setFilialorigem_16] = useState("");
  const [notaFiscal_16, setNotafiscal_16] = useState("");
  const [tipoOperacao_16, setTipoOperacao_16] = useState("");
  const [codigo_16, setCodigo_16] = useState("");
  const [descricaoProduto_16, setDescricaoProduto_16] = useState("");
  const [quantidadeProduto_16, setQuantidadeproduto_16] = useState("");
  const [observacao_16, setObservacao_16] = useState("");
  //
  const [filialOrigem_17, setFilialorigem_17] = useState("");
  const [notaFiscal_17, setNotafiscal_17] = useState("");
  const [tipoOperacao_17, setTipoOperacao_17] = useState("");
  const [codigo_17, setCodigo_17] = useState("");
  const [descricaoProduto_17, setDescricaoProduto_17] = useState("");
  const [quantidadeProduto_17, setQuantidadeproduto_17] = useState("");
  const [observacao_17, setObservacao_17] = useState("");
  //
  const [filialOrigem_18, setFilialorigem_18] = useState("");
  const [notaFiscal_18, setNotafiscal_18] = useState("");
  const [tipoOperacao_18, setTipoOperacao_18] = useState("");
  const [codigo_18, setCodigo_18] = useState("");
  const [descricaoProduto_18, setDescricaoProduto_18] = useState("");
  const [quantidadeProduto_18, setQuantidadeproduto_18] = useState("");
  const [observacao_18, setObservacao_18] = useState("");
  //
  const [filialOrigem_19, setFilialorigem_19] = useState("");
  const [notaFiscal_19, setNotafiscal_19] = useState("");
  const [tipoOperacao_19, setTipoOperacao_19] = useState("");
  const [codigo_19, setCodigo_19] = useState("");
  const [descricaoProduto_19, setDescricaoProduto_19] = useState("");
  const [quantidadeProduto_19, setQuantidadeproduto_19] = useState("");
  const [observacao_19, setObservacao_19] = useState("");
  //
  const [filialOrigem_20, setFilialorigem_20] = useState("");
  const [notaFiscal_20, setNotafiscal_20] = useState("");
  const [tipoOperacao_20, setTipoOperacao_20] = useState("");
  const [codigo_20, setCodigo_20] = useState("");
  const [descricaoProduto_20, setDescricaoProduto_20] = useState("");
  const [quantidadeProduto_20, setQuantidadeproduto_20] = useState("");
  const [observacao_20, setObservacao_20] = useState("");
  //#endregion

  const [loader, showLoader, hideLoader] = UseLoader();
  const history = useHistory();

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

  useEffect(() => {
    fetchDataToOptions();
  }, []);

  async function fetchDataToOptions() {
    showLoader();
    await api.get("filiais").then((response) => {
      setFiliais(response.data);
    });
    await api.get("transportador").then((response) => {
      setTransportadores(response.data);
    });
    await api.get("conferente").then((response) => {
      setConferentes(response.data);
      hideLoader();
    });
  }

  //gera um número aleatório para o número de controle
  function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
  }
  function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join("");
  }

  async function handleNewTransferencia(e) {
    e.preventDefault();

    const data = {
      dataAtual,
      numeroControle,
      unidadeDestino,
      nomeUnidadeDestino,
      enderecoUnidadeDestino,
      transportador,
      placaVeiculo,
      conferente,
      //
      filialOrigem_1,
      notaFiscal_1,
      tipoOperacao_1,
      codigo_1,
      descricaoProduto_1,
      quantidadeProduto_1,
      observacao_1,
      //
      filialOrigem_2,
      notaFiscal_2,
      tipoOperacao_2,
      codigo_2,
      descricaoProduto_2,
      quantidadeProduto_2,
      observacao_2,
      //
      filialOrigem_3,
      notaFiscal_3,
      tipoOperacao_3,
      codigo_3,
      descricaoProduto_3,
      quantidadeProduto_3,
      observacao_3,
      //
      filialOrigem_4,
      notaFiscal_4,
      tipoOperacao_4,
      codigo_4,
      descricaoProduto_4,
      quantidadeProduto_4,
      observacao_4,
      //
      filialOrigem_5,
      notaFiscal_5,
      tipoOperacao_5,
      codigo_5,
      descricaoProduto_5,
      quantidadeProduto_5,
      observacao_5,
      //
      filialOrigem_6,
      notaFiscal_6,
      tipoOperacao_6,
      codigo_6,
      descricaoProduto_6,
      quantidadeProduto_6,
      observacao_6,
      //
      filialOrigem_7,
      notaFiscal_7,
      tipoOperacao_7,
      codigo_7,
      descricaoProduto_7,
      quantidadeProduto_7,
      observacao_7,
      //
      filialOrigem_8,
      notaFiscal_8,
      tipoOperacao_8,
      codigo_8,
      descricaoProduto_8,
      quantidadeProduto_8,
      observacao_8,
      //
      filialOrigem_9,
      notaFiscal_9,
      tipoOperacao_9,
      codigo_9,
      descricaoProduto_9,
      quantidadeProduto_9,
      observacao_9,
      //
      filialOrigem_10,
      notaFiscal_10,
      tipoOperacao_10,
      codigo_10,
      descricaoProduto_10,
      quantidadeProduto_10,
      observacao_10,
      //
      filialOrigem_11,
      notaFiscal_11,
      tipoOperacao_11,
      codigo_11,
      descricaoProduto_11,
      quantidadeProduto_11,
      observacao_11,
      //
      filialOrigem_12,
      notaFiscal_12,
      tipoOperacao_12,
      codigo_12,
      descricaoProduto_12,
      quantidadeProduto_12,
      observacao_12,
      //
      filialOrigem_13,
      notaFiscal_13,
      tipoOperacao_13,
      codigo_13,
      descricaoProduto_13,
      quantidadeProduto_13,
      observacao_13,
      //
      filialOrigem_14,
      notaFiscal_14,
      tipoOperacao_14,
      codigo_14,
      descricaoProduto_14,
      quantidadeProduto_14,
      observacao_14,
      //
      filialOrigem_15,
      notaFiscal_15,
      tipoOperacao_15,
      codigo_15,
      descricaoProduto_15,
      quantidadeProduto_15,
      observacao_15,
      //
      filialOrigem_16,
      notaFiscal_16,
      tipoOperacao_16,
      codigo_16,
      descricaoProduto_16,
      quantidadeProduto_16,
      observacao_16,
      //
      filialOrigem_17,
      notaFiscal_17,
      tipoOperacao_17,
      codigo_17,
      descricaoProduto_17,
      quantidadeProduto_17,
      observacao_17,
      //
      filialOrigem_18,
      notaFiscal_18,
      tipoOperacao_18,
      codigo_18,
      descricaoProduto_18,
      quantidadeProduto_18,
      observacao_18,
      //
      filialOrigem_19,
      notaFiscal_19,
      tipoOperacao_19,
      codigo_19,
      descricaoProduto_19,
      quantidadeProduto_19,
      observacao_19,
      //
      filialOrigem_20,
      notaFiscal_20,
      tipoOperacao_20,
      codigo_20,
      descricaoProduto_20,
      quantidadeProduto_20,
      observacao_20,
    };

    try {
      showLoader();
      await api.post("/transferencia/create", data).then((dataReturn) => {
        hideLoader();
        const { id } = dataReturn.data;
        Swal.fire({
          title: "Inserido com sucesso !",
          confirmButtonText: "Gerar relatório",
          icon: "success",
          preConfirm: () => {
            document.querySelector("form").reset();
            history.push(`/transferencia/report/${id}`);
          },
        });
      });
    } catch (err) {
      hideLoader();
      Swal.fire({
        title: "Erro ao inserir",
        text: "Contate o administrador",
        icon: "error",
        confirmButtonText: "Voltar",
      });
    }
  }

  function showMoreLines(e) {
    e.preventDefault();
    let divMoreLines = document.querySelector("#moreLines");
    let btnShowMoreLines = document.querySelector("#btnShowMoreLines");
    divMoreLines.style.display = "block";
    btnShowMoreLines.style.display = "none";
  }

  async function handleUnidadeDestino(optionValue) {
    if (!optionValue || optionValue == "") {
      setNomeUnidadeDestino("");
      setEnderecoUnidadeDestino("");
      return null;
    }

    showLoader();
    setUnidadeDestino(optionValue);

    await api
      .get(`/filiais/findByNumeroFilial/${optionValue}`)
      .then((response) => {
        hideLoader();
        let endereco =
          response.data[0].endereco +
          ", " +
          response.data[0].numeroEndereco +
          " " +
          response.data[0].complemento;
        setNomeUnidadeDestino(response.data[0].nomeFantasia);
        setEnderecoUnidadeDestino(endereco);
      });

    await api
      .get(`/transportador/findByFilialAtendida/${optionValue}`)
      .then((response) => {
        hideLoader();
        setTransportador(response.data);
      });
  }

  async function handleTransportador(optionValue) {
    if (!optionValue || optionValue == "") {
      setPlacaVeiculo("");
      setTransportador("");
      return null;
    }

    showLoader();
    await api.get(`/transportador/findById/${optionValue}`).then((response) => {
      hideLoader();
      setPlacaVeiculo(response.data[0].placaVeiculo);
      setTransportador(response.data[0].nomeTransportador);
    });
  }

  return (
    <div className="transferencia container-fluid">
      <h1>Nova transferência</h1>
      <form onSubmit={handleNewTransferencia}>
        <div className="transfereciaCreate container">
          <hr />
          <div className="row">
            <div className="col-md-3 mb-2 pr-2">
              <label htmlFor="dataAtual">Data</label>
              <input
                type="text"
                name="dataAtual"
                className="form-control"
                required
                disabled
                value={dataAtual}
              />
            </div>
            <div className="col-md-7"></div>
            <div className="col-md-2 mb-2">
              <label htmlFor="numeroControle">Controle</label>
              <input
                type="text"
                name="numeroControle"
                className="form-control"
                value={numeroControle}
                disabled
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-2 pr-2">
              <label htmlFor="unidadeDestino">Unidade destino</label>
              <select
                name="unidadeDestino"
                className="form-control"
                required
                onChange={(e) => handleUnidadeDestino(e.target.value)}
              >
                <option value="">Selecione</option>
                {filiais.map((filial) => (
                  <option value={filial.numeroFilial} key={filial.id}>
                    {filial.numeroFilial}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3 mb-2">
              <label htmlFor="nomeUnidadeDestino">Nome</label>
              <input
                name="nomeUnidadeDestino"
                type="text"
                className="form-control"
                value={nomeUnidadeDestino}
                required
                disabled
              />
            </div>

            <div className="col-md-6 mb-2">
              <label htmlFor="enderecoUnidadeDestino">Endereço</label>
              <input
                name="enderecoUnidadeDestino"
                type="text"
                className="form-control"
                value={enderecoUnidadeDestino}
                disabled
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-2">
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
                    {transportador.nomeTransportador}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-2 mb-2">
              <label htmlFor="placaVeiculo">Placa</label>
              <input
                type="text"
                name="placaVeiculo"
                className="form-control"
                required
                disabled
                value={placaVeiculo}
              />
            </div>

            <div className="col-md-3">
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

            <div className="col-md-4 mb-2 mt-2">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ height: "50px" }}
              >
                Inserir
              </button>
            </div>
          </div>

          <div className="formLines">
            <div className="row Head">
              <div className="col-md-1 mr-2 mb-1 p-0">Filial origem</div>
              <div className="col-md-1 mr-2 mb-1 p-0">Nota fiscal</div>
              <div className="col-md-1 mr-2 mb-1 p-0">Tipo</div>
              <div className="col-md-1 mr-2 mb-1 p-0">Código</div>
              <div className="col-md-3 mr-2 mb-1 p-0">Descrição</div>
              <div className="col-md-1 mr-2 mb-1 p-0">Quantidade</div>
              <div className="col-md-3 mr-2 mb-1 p-0">Observação</div>
            </div>

            {/*Line1*/}
            <div className="row">
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_1"
                  className="form-control"
                  required
                  onChange={(e) => setFilialorigem_1(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_1"
                  className="form-control"
                  required
                  onChange={(e) => setNotafiscal_1(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_1"
                  className="form-control"
                  required
                  onChange={(e) => setTipoOperacao_1(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_1"
                  className="form-control"
                  required
                  onChange={(e) => setCodigo_1(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_1"
                  className="form-control"
                  maxLength="50"
                  required
                  onChange={(e) => setDescricaoProduto_1(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_1"
                  className="form-control"
                  required
                  onChange={(e) => setQuantidadeproduto_1(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_1"
                  className="form-control"
                  onChange={(e) => setObservacao_1(e.target.value)}
                />
              </div>
            </div>

            {/*Line2*/}
            <div className="row">
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_2"
                  className="form-control"
                  onChange={(e) => setFilialorigem_2(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_2"
                  className="form-control"
                  onChange={(e) => setNotafiscal_2(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_2"
                  className="form-control"
                  onChange={(e) => setTipoOperacao_2(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_2"
                  className="form-control"
                  onChange={(e) => setCodigo_2(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_2"
                  className="form-control"
                  maxLength="50"
                  onChange={(e) => setDescricaoProduto_2(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_2"
                  className="form-control"
                  onChange={(e) => setQuantidadeproduto_2(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_2"
                  className="form-control"
                  onChange={(e) => setObservacao_2(e.target.value)}
                />
              </div>
            </div>

            {/*Line3*/}
            <div className="row">
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_3"
                  className="form-control"
                  onChange={(e) => setFilialorigem_3(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_3"
                  className="form-control"
                  onChange={(e) => setNotafiscal_3(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_3"
                  className="form-control"
                  onChange={(e) => setTipoOperacao_3(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_3"
                  className="form-control"
                  onChange={(e) => setCodigo_3(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_3"
                  className="form-control"
                  maxLength="50"
                  onChange={(e) => setDescricaoProduto_3(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_3"
                  className="form-control"
                  onChange={(e) => setQuantidadeproduto_3(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_3"
                  className="form-control"
                  onChange={(e) => setObservacao_3(e.target.value)}
                />
              </div>
            </div>

            {/*Line4*/}
            <div className="row">
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_4"
                  className="form-control"
                  onChange={(e) => setFilialorigem_4(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_4"
                  className="form-control"
                  onChange={(e) => setNotafiscal_4(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_4"
                  className="form-control"
                  onChange={(e) => setTipoOperacao_4(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_4"
                  className="form-control"
                  onChange={(e) => setCodigo_4(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_4"
                  className="form-control"
                  maxLength="50"
                  onChange={(e) => setDescricaoProduto_4(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_4"
                  className="form-control"
                  onChange={(e) => setQuantidadeproduto_4(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_4"
                  className="form-control"
                  onChange={(e) => setObservacao_4(e.target.value)}
                />
              </div>
            </div>

            {/*Line5*/}
            <div className="row">
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_5"
                  className="form-control"
                  onChange={(e) => setFilialorigem_5(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_5"
                  className="form-control"
                  onChange={(e) => setNotafiscal_5(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_5"
                  className="form-control"
                  onChange={(e) => setTipoOperacao_5(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_5"
                  className="form-control"
                  onChange={(e) => setCodigo_5(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_5"
                  className="form-control"
                  maxLength="50"
                  onChange={(e) => setDescricaoProduto_5(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_5"
                  className="form-control"
                  onChange={(e) => setQuantidadeproduto_5(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_5"
                  className="form-control"
                  onChange={(e) => setObservacao_5(e.target.value)}
                />
              </div>
            </div>

            {/*Line6*/}
            <div className="row">
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_6"
                  className="form-control"
                  onChange={(e) => setFilialorigem_6(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_6"
                  className="form-control"
                  onChange={(e) => setNotafiscal_6(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_6"
                  className="form-control"
                  onChange={(e) => setTipoOperacao_6(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_6"
                  className="form-control"
                  onChange={(e) => setCodigo_6(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_6"
                  className="form-control"
                  maxLength="50"
                  onChange={(e) => setDescricaoProduto_6(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_6"
                  className="form-control"
                  onChange={(e) => setQuantidadeproduto_6(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_6"
                  className="form-control"
                  onChange={(e) => setObservacao_6(e.target.value)}
                />
              </div>
            </div>

            {/*Line7*/}
            <div className="row">
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_7"
                  className="form-control"
                  onChange={(e) => setFilialorigem_7(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_7"
                  className="form-control"
                  onChange={(e) => setNotafiscal_7(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_7"
                  className="form-control"
                  onChange={(e) => setTipoOperacao_7(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_7"
                  className="form-control"
                  onChange={(e) => setCodigo_7(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_7"
                  className="form-control"
                  maxLength="50"
                  onChange={(e) => setDescricaoProduto_7(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_7"
                  className="form-control"
                  onChange={(e) => setQuantidadeproduto_7(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_7"
                  className="form-control"
                  onChange={(e) => setObservacao_7(e.target.value)}
                />
              </div>
            </div>

            {/*Line8*/}
            <div className="row">
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_8"
                  className="form-control"
                  onChange={(e) => setFilialorigem_8(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_8"
                  className="form-control"
                  onChange={(e) => setNotafiscal_8(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_8"
                  className="form-control"
                  onChange={(e) => setTipoOperacao_8(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_8"
                  className="form-control"
                  onChange={(e) => setCodigo_8(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_8"
                  className="form-control"
                  maxLength="50"
                  onChange={(e) => setDescricaoProduto_8(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_8"
                  className="form-control"
                  onChange={(e) => setQuantidadeproduto_8(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_8"
                  className="form-control"
                  onChange={(e) => setObservacao_8(e.target.value)}
                />
              </div>
            </div>

            {/*Line9*/}
            <div className="row">
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_9"
                  className="form-control"
                  onChange={(e) => setFilialorigem_9(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_9"
                  className="form-control"
                  onChange={(e) => setNotafiscal_9(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_9"
                  className="form-control"
                  onChange={(e) => setTipoOperacao_9(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_9"
                  className="form-control"
                  onChange={(e) => setCodigo_9(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_9"
                  className="form-control"
                  maxLength="50"
                  onChange={(e) => setDescricaoProduto_9(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_9"
                  className="form-control"
                  onChange={(e) => setQuantidadeproduto_9(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_9"
                  className="form-control"
                  onChange={(e) => setObservacao_9(e.target.value)}
                />
              </div>
            </div>

            {/*Line10*/}
            <div className="row">
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="filialOrigem_10"
                  className="form-control"
                  onChange={(e) => setFilialorigem_10(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="notaFiscal_10"
                  className="form-control"
                  onChange={(e) => setNotafiscal_10(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <select
                  name="tipoOperacao_10"
                  className="form-control"
                  onChange={(e) => setTipoOperacao_10(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {tipoOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="codigo_10"
                  className="form-control"
                  onChange={(e) => setCodigo_10(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="descricaoProduto_10"
                  className="form-control"
                  maxLength="50"
                  onChange={(e) => setDescricaoProduto_10(e.target.value)}
                />
              </div>
              <div className="col-md-1 mr-2 mb-1 p-0">
                <input
                  type="number"
                  name="quantidadeProduto_10"
                  className="form-control"
                  onChange={(e) => setQuantidadeproduto_10(e.target.value)}
                />
              </div>
              <div className="col-md-3 mr-2 mb-1 p-0">
                <input
                  type="text"
                  name="observacao_10"
                  className="form-control"
                  onChange={(e) => setObservacao_10(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-1 p-0">
                <button
                  className="btn btn-primary my-2"
                  id="btnShowMoreLines"
                  onClick={showMoreLines}
                >
                  <FiPlusCircle size="30" />
                </button>
              </div>
            </div>

            <div id="moreLines" style={{ display: "none" }}>
              {/*Line11*/}
              <div className="row">
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="filialOrigem_11"
                    className="form-control"
                    onChange={(e) => setFilialorigem_11(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="notaFiscal_11"
                    className="form-control"
                    onChange={(e) => setNotafiscal_11(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <select
                    name="tipoOperacao_11"
                    className="form-control"
                    onChange={(e) => setTipoOperacao_11(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {tipoOptions.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="codigo_11"
                    className="form-control"
                    onChange={(e) => setCodigo_11(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="descricaoProduto_11"
                    className="form-control"
                    maxLength="50"
                    onChange={(e) => setDescricaoProduto_11(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="number"
                    name="quantidadeProduto_11"
                    className="form-control"
                    onChange={(e) => setQuantidadeproduto_11(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="observacao_11"
                    className="form-control"
                    onChange={(e) => setObservacao_11(e.target.value)}
                  />
                </div>
              </div>

              {/*Line12*/}
              <div className="row">
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="filialOrigem_12"
                    className="form-control"
                    onChange={(e) => setFilialorigem_12(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="notaFiscal_12"
                    className="form-control"
                    onChange={(e) => setNotafiscal_12(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <select
                    name="tipoOperacao_12"
                    className="form-control"
                    onChange={(e) => setTipoOperacao_12(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {tipoOptions.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="codigo_12"
                    className="form-control"
                    onChange={(e) => setCodigo_12(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="descricaoProduto_12"
                    className="form-control"
                    maxLength="50"
                    onChange={(e) => setDescricaoProduto_12(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="number"
                    name="quantidadeProduto_12"
                    className="form-control"
                    onChange={(e) => setQuantidadeproduto_12(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="observacao_12"
                    className="form-control"
                    onChange={(e) => setObservacao_12(e.target.value)}
                  />
                </div>
              </div>

              {/*Line13*/}
              <div className="row">
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="filialOrigem_13"
                    className="form-control"
                    onChange={(e) => setFilialorigem_13(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="notaFiscal_13"
                    className="form-control"
                    onChange={(e) => setNotafiscal_13(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <select
                    name="tipoOperacao_13"
                    className="form-control"
                    onChange={(e) => setTipoOperacao_13(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {tipoOptions.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="codigo_13"
                    className="form-control"
                    onChange={(e) => setCodigo_13(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="descricaoProduto_13"
                    className="form-control"
                    maxLength="50"
                    onChange={(e) => setDescricaoProduto_13(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="number"
                    name="quantidadeProduto_13"
                    className="form-control"
                    onChange={(e) => setQuantidadeproduto_13(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="observacao_13"
                    className="form-control"
                    onChange={(e) => setObservacao_13(e.target.value)}
                  />
                </div>
              </div>

              {/*Line14*/}
              <div className="row">
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="filialOrigem_14"
                    className="form-control"
                    onChange={(e) => setFilialorigem_14(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="notaFiscal_14"
                    className="form-control"
                    onChange={(e) => setNotafiscal_14(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <select
                    name="tipoOperacao_14"
                    className="form-control"
                    onChange={(e) => setTipoOperacao_14(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {tipoOptions.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="codigo_14"
                    className="form-control"
                    onChange={(e) => setCodigo_14(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="descricaoProduto_14"
                    className="form-control"
                    maxLength="50"
                    onChange={(e) => setDescricaoProduto_14(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="number"
                    name="quantidadeProduto_14"
                    className="form-control"
                    onChange={(e) => setQuantidadeproduto_14(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="observacao_14"
                    className="form-control"
                    onChange={(e) => setObservacao_14(e.target.value)}
                  />
                </div>
              </div>

              {/*Line15*/}
              <div className="row">
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="filialOrigem_15"
                    className="form-control"
                    onChange={(e) => setFilialorigem_15(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="notaFiscal_15"
                    className="form-control"
                    onChange={(e) => setNotafiscal_15(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <select
                    name="tipoOperacao_15"
                    className="form-control"
                    onChange={(e) => setTipoOperacao_15(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {tipoOptions.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="codigo_15"
                    className="form-control"
                    onChange={(e) => setCodigo_15(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="descricaoProduto_15"
                    className="form-control"
                    maxLength="50"
                    onChange={(e) => setDescricaoProduto_15(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="number"
                    name="quantidadeProduto_15"
                    className="form-control"
                    onChange={(e) => setQuantidadeproduto_15(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="observacao_15"
                    className="form-control"
                    onChange={(e) => setObservacao_15(e.target.value)}
                  />
                </div>
              </div>

              {/*Line16*/}
              <div className="row">
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="filialOrigem_16"
                    className="form-control"
                    onChange={(e) => setFilialorigem_16(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="notaFiscal_16"
                    className="form-control"
                    onChange={(e) => setNotafiscal_16(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <select
                    name="tipoOperacao_16"
                    className="form-control"
                    onChange={(e) => setTipoOperacao_16(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {tipoOptions.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="codigo_16"
                    className="form-control"
                    onChange={(e) => setCodigo_16(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="descricaoProduto_16"
                    className="form-control"
                    maxLength="50"
                    onChange={(e) => setDescricaoProduto_16(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="number"
                    name="quantidadeProduto_16"
                    className="form-control"
                    onChange={(e) => setQuantidadeproduto_16(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="observacao_16"
                    className="form-control"
                    onChange={(e) => setObservacao_16(e.target.value)}
                  />
                </div>
              </div>

              {/*Line17*/}
              <div className="row">
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="filialOrigem_17"
                    className="form-control"
                    onChange={(e) => setFilialorigem_17(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="notaFiscal_17"
                    className="form-control"
                    onChange={(e) => setNotafiscal_17(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <select
                    name="tipoOperacao_17"
                    className="form-control"
                    onChange={(e) => setTipoOperacao_17(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {tipoOptions.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="codigo_17"
                    className="form-control"
                    onChange={(e) => setCodigo_17(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="descricaoProduto_17"
                    className="form-control"
                    maxLength="50"
                    onChange={(e) => setDescricaoProduto_17(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="number"
                    name="quantidadeProduto_17"
                    className="form-control"
                    onChange={(e) => setQuantidadeproduto_17(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="observacao_17"
                    className="form-control"
                    onChange={(e) => setObservacao_17(e.target.value)}
                  />
                </div>
              </div>

              {/*Line18*/}
              <div className="row">
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="filialOrigem_18"
                    className="form-control"
                    onChange={(e) => setFilialorigem_18(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="notaFiscal_18"
                    className="form-control"
                    onChange={(e) => setNotafiscal_18(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <select
                    name="tipoOperacao_18"
                    className="form-control"
                    onChange={(e) => setTipoOperacao_18(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {tipoOptions.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="codigo_18"
                    className="form-control"
                    onChange={(e) => setCodigo_18(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="descricaoProduto_18"
                    className="form-control"
                    maxLength="50"
                    onChange={(e) => setDescricaoProduto_18(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="number"
                    name="quantidadeProduto_18"
                    className="form-control"
                    onChange={(e) => setQuantidadeproduto_18(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="observacao_18"
                    className="form-control"
                    onChange={(e) => setObservacao_18(e.target.value)}
                  />
                </div>
              </div>

              {/*Line19*/}
              <div className="row">
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="filialOrigem_19"
                    className="form-control"
                    onChange={(e) => setFilialorigem_19(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="notaFiscal_19"
                    className="form-control"
                    onChange={(e) => setNotafiscal_19(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <select
                    name="tipoOperacao_19"
                    className="form-control"
                    onChange={(e) => setTipoOperacao_19(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {tipoOptions.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="codigo_19"
                    className="form-control"
                    onChange={(e) => setCodigo_19(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="descricaoProduto_19"
                    className="form-control"
                    maxLength="50"
                    onChange={(e) => setDescricaoProduto_19(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="number"
                    name="quantidadeProduto_19"
                    className="form-control"
                    onChange={(e) => setQuantidadeproduto_19(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="observacao_19"
                    className="form-control"
                    onChange={(e) => setObservacao_19(e.target.value)}
                  />
                </div>
              </div>

              {/*Line20*/}
              <div className="row">
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="filialOrigem_20"
                    className="form-control"
                    onChange={(e) => setFilialorigem_20(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="notaFiscal_20"
                    className="form-control"
                    onChange={(e) => setNotafiscal_20(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <select
                    name="tipoOperacao_20"
                    className="form-control"
                    onChange={(e) => setTipoOperacao_20(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {tipoOptions.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="codigo_20"
                    className="form-control"
                    onChange={(e) => setCodigo_20(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="descricaoProduto_20"
                    className="form-control"
                    maxLength="50"
                    onChange={(e) => setDescricaoProduto_20(e.target.value)}
                  />
                </div>
                <div className="col-md-1 mr-2 mb-1 p-0">
                  <input
                    type="number"
                    name="quantidadeProduto_20"
                    className="form-control"
                    onChange={(e) => setQuantidadeproduto_20(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mr-2 mb-1 p-0">
                  <input
                    type="text"
                    name="observacao_20"
                    className="form-control"
                    onChange={(e) => setObservacao_20(e.target.value)}
                  />
                </div>
              </div>

              {/*addMoreLines*/}
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
