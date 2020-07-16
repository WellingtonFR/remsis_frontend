import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logoMagalu from "../../img/logoMagalu.png";
import moment from "moment";
import "moment/locale/pt-br";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import UseLoader from "../../hooks/UseLoader";

export default function TransferenciaReport() {
  const [loader, showLoader, hideLoader] = UseLoader();
  const { id } = useParams();
  const [report, setReport] = useState("");
  const [dataDeImpressao, setDataDeImpressao] = useState(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  );

  useEffect(() => {
    populateData();
  }, []);

  async function populateData() {
    showLoader();
    api.get(`/transferencia/findById/${id}`).then((response) => {
      hideLoader();
      setReport(response.data[0]);
    });
  }

  async function handlePrint(e) {
    e.preventDefault();
    await setDataDeImpressao(moment().format("MMMM Do YYYY, h:mm:ss a"));
    window.print();
  }

  return (
    <div className="container-fluid report">
      <div className="overlay-print d-print-none">
        <button
          type="button"
          name="imprimir"
          className="btn btn-danger btn-print"
          onClick={handlePrint}
        >
          Imprimir
        </button>
      </div>
      <div className="report-top">
        <div className="row">
          <div className="col-sm-3">
            <img src={logoMagalu} className="img-fluid" alt="logoMagalu" />
          </div>
          <div className="col-sm-2">
            <div className="label">Data</div>
            <div className="data">{report.dataAtual}</div>
            <div className="label">Controle</div>
            <div className="data">{report.numeroControle}</div>
          </div>
          <div className="col">
            <div className="label">Unidade de destino</div>
            <div className="data">{report.nomeUnidadeDestino}</div>
            <div className="label">Endereço</div>
            <div className="data">{report.enderecoUnidadeDestino}</div>
          </div>

          <div className="col-sm-3">
            <div className="label">Transportador</div>
            <div className="data">{report.transportador}</div>

            <div className="label">Placa do veículo</div>
            <div className="data">{report.placaVeiculo}</div>
          </div>
        </div>
      </div>
      {/*top*/}

      <div className="row report-header">
        <div className="col">Relatório de remanejamento CD 94 - Londrina</div>
      </div>

      {/*down*/}
      <div className="report-down">
        <div className="row header-report-lines">
          <div className="col-sm-1">Origem</div>
          <div className="col-sm-1">NF</div>
          <div className="col-sm-2">Tipo</div>
          <div className="col-sm-2">Código</div>
          <div className="col-sm-3">Descrição</div>
          <div className="col-sm-1">Quant.</div>
          <div className="col-sm-2">Observação</div>
        </div>
        {/*Linha 1*/}
        <div className="row">
          <div className="col-sm-1">{report.filialOrigem_1}</div>
          <div className="col-sm-1">{report.notaFiscal_1}</div>
          <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_1}</div>
          <div className="col-sm-2">{report.codigo_1}</div>
          <div className="col-sm-3">{report.descricaoProduto_1}</div>
          <div className="col-sm-1">{report.quantidadeProduto_1}</div>
          <div className="col-sm-2">{report.observacao_1}</div>
        </div>
        {/*Linha 2*/}
        {report.filialOrigem_2 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_2}</div>
            <div className="col-sm-1">{report.notaFiscal_2}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_2}</div>
            <div className="col-sm-2">{report.codigo_2}</div>
            <div className="col-sm-3">{report.descricaoProduto_2}</div>
            <div className="col-sm-1">{report.quantidadeProduto_2}</div>
            <div className="col-sm-2">{report.observacao_2}</div>
          </div>
        )}
        {/*Linha 3*/}
        {report.filialOrigem_3 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_3}</div>
            <div className="col-sm-1">{report.notaFiscal_3}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_3}</div>
            <div className="col-sm-2">{report.codigo_3}</div>
            <div className="col-sm-3">{report.descricaoProduto_3}</div>
            <div className="col-sm-1">{report.quantidadeProduto_3}</div>
            <div className="col-sm-2">{report.observacao_3}</div>
          </div>
        )}
        {report.filialOrigem_4 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_4}</div>
            <div className="col-sm-1">{report.notaFiscal_4}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_4}</div>
            <div className="col-sm-2">{report.codigo_4}</div>
            <div className="col-sm-3">{report.descricaoProduto_4}</div>
            <div className="col-sm-1">{report.quantidadeProduto_4}</div>
            <div className="col-sm-2">{report.observacao_4}</div>
          </div>
        )}
        {report.filialOrigem_5 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_5}</div>
            <div className="col-sm-1">{report.notaFiscal_5}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_5}</div>
            <div className="col-sm-2">{report.codigo_5}</div>
            <div className="col-sm-3">{report.descricaoProduto_5}</div>
            <div className="col-sm-1">{report.quantidadeProduto_5}</div>
            <div className="col-sm-2">{report.observacao_5}</div>
          </div>
        )}
        {report.filialOrigem_6 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_6}</div>
            <div className="col-sm-1">{report.notaFiscal_6}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_6}</div>
            <div className="col-sm-2">{report.codigo_6}</div>
            <div className="col-sm-3">{report.descricaoProduto_6}</div>
            <div className="col-sm-1">{report.quantidadeProduto_6}</div>
            <div className="col-sm-2">{report.observacao_6}</div>
          </div>
        )}
        {report.filialOrigem_7 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_7}</div>
            <div className="col-sm-1">{report.notaFiscal_7}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_7}</div>
            <div className="col-sm-2">{report.codigo_7}</div>
            <div className="col-sm-3">{report.descricaoProduto_7}</div>
            <div className="col-sm-1">{report.quantidadeProduto_7}</div>
            <div className="col-sm-2">{report.observacao_7}</div>
          </div>
        )}
        {report.filialOrigem_8 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_8}</div>
            <div className="col-sm-1">{report.notaFiscal_8}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_8}</div>
            <div className="col-sm-2">{report.codigo_8}</div>
            <div className="col-sm-3">{report.descricaoProduto_8}</div>
            <div className="col-sm-1">{report.quantidadeProduto_8}</div>
            <div className="col-sm-2">{report.observacao_8}</div>
          </div>
        )}
        {report.filialOrigem_9 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_9}</div>
            <div className="col-sm-1">{report.notaFiscal_9}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_9}</div>
            <div className="col-sm-2">{report.codigo_9}</div>
            <div className="col-sm-3">{report.descricaoProduto_9}</div>
            <div className="col-sm-1">{report.quantidadeProduto_9}</div>
            <div className="col-sm-2">{report.observacao_9}</div>
          </div>
        )}
        {report.filialOrigem_10 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_10}</div>
            <div className="col-sm-1">{report.notaFiscal_10}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_10}</div>
            <div className="col-sm-2">{report.codigo_10}</div>
            <div className="col-sm-3">{report.descricaoProduto_10}</div>
            <div className="col-sm-1">{report.quantidadeProduto_10}</div>
            <div className="col-sm-2">{report.observacao_10}</div>
          </div>
        )}
        {report.filialOrigem_11 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_11}</div>
            <div className="col-sm-1">{report.notaFiscal_11}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_11}</div>
            <div className="col-sm-2">{report.codigo_11}</div>
            <div className="col-sm-3">{report.descricaoProduto_11}</div>
            <div className="col-sm-1">{report.quantidadeProduto_11}</div>
            <div className="col-sm-2">{report.observacao_11}</div>
          </div>
        )}
        {report.filialOrigem_12 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_12}</div>
            <div className="col-sm-1">{report.notaFiscal_12}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_12}</div>
            <div className="col-sm-2">{report.codigo_12}</div>
            <div className="col-sm-3">{report.descricaoProduto_12}</div>
            <div className="col-sm-1">{report.quantidadeProduto_12}</div>
            <div className="col-sm-2">{report.observacao_12}</div>
          </div>
        )}
        {report.filialOrigem_13 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_13}</div>
            <div className="col-sm-1">{report.notaFiscal_13}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_13}</div>
            <div className="col-sm-2">{report.codigo_13}</div>
            <div className="col-sm-3">{report.descricaoProduto_13}</div>
            <div className="col-sm-1">{report.quantidadeProduto_13}</div>
            <div className="col-sm-2">{report.observacao_13}</div>
          </div>
        )}
        {report.filialOrigem_14 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_14}</div>
            <div className="col-sm-1">{report.notaFiscal_14}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_14}</div>
            <div className="col-sm-2">{report.codigo_14}</div>
            <div className="col-sm-3">{report.descricaoProduto_14}</div>
            <div className="col-sm-1">{report.quantidadeProduto_14}</div>
            <div className="col-sm-2">{report.observacao_14}</div>
          </div>
        )}
        {report.filialOrigem_15 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_15}</div>
            <div className="col-sm-1">{report.notaFiscal_15}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_15}</div>
            <div className="col-sm-2">{report.codigo_15}</div>
            <div className="col-sm-3">{report.descricaoProduto_15}</div>
            <div className="col-sm-1">{report.quantidadeProduto_15}</div>
            <div className="col-sm-2">{report.observacao_15}</div>
          </div>
        )}
        {report.filialOrigem_16 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_16}</div>
            <div className="col-sm-1">{report.notaFiscal_16}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_16}</div>
            <div className="col-sm-2">{report.codigo_16}</div>
            <div className="col-sm-3">{report.descricaoProduto_16}</div>
            <div className="col-sm-1">{report.quantidadeProduto_16}</div>
            <div className="col-sm-2">{report.observacao_16}</div>
          </div>
        )}
        {report.filialOrigem_17 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_17}</div>
            <div className="col-sm-1">{report.notaFiscal_17}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_17}</div>
            <div className="col-sm-2">{report.codigo_17}</div>
            <div className="col-sm-3">{report.descricaoProduto_17}</div>
            <div className="col-sm-1">{report.quantidadeProduto_17}</div>
            <div className="col-sm-2">{report.observacao_17}</div>
          </div>
        )}
        {report.filialOrigem_18 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_18}</div>
            <div className="col-sm-1">{report.notaFiscal_18}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_18}</div>
            <div className="col-sm-2">{report.codigo_18}</div>
            <div className="col-sm-3">{report.descricaoProduto_18}</div>
            <div className="col-sm-1">{report.quantidadeProduto_18}</div>
            <div className="col-sm-2">{report.observacao_18}</div>
          </div>
        )}
        {report.filialOrigem_19 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_19}</div>
            <div className="col-sm-1">{report.notaFiscal_19}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_19}</div>
            <div className="col-sm-2">{report.codigo_19}</div>
            <div className="col-sm-3">{report.descricaoProduto_19}</div>
            <div className="col-sm-1">{report.quantidadeProduto_19}</div>
            <div className="col-sm-2">{report.observacao_19}</div>
          </div>
        )}
        {report.filialOrigem_20 !== "" && (
          <div className="row">
            <div className="col-sm-1">{report.filialOrigem_20}</div>
            <div className="col-sm-1">{report.notaFiscal_20}</div>
            <div className="col-sm-2 coluna-tipo">{report.tipoOperacao_20}</div>
            <div className="col-sm-2">{report.codigo_20}</div>
            <div className="col-sm-3">{report.descricaoProduto_20}</div>
            <div className="col-sm-1">{report.quantidadeProduto_20}</div>
            <div className="col-sm-2">{report.observacao_20}</div>
          </div>
        )}
        {/*down*/}
      </div>
      <div className="report-footer">
        <div className="row">
          <div className="col footer-divisions">
            <div className="orientations"></div>
            <div className="sign">
              <div className="label">Conferente do CD</div>
              <div className="sign-line">
                <h6>{report.conferente}</h6>
              </div>
            </div>
          </div>
          <div className="col footer-divisions">
            <div className="orientations">
              Declaro que efetuei a conferência dos produtos relacionados e que
              estes foram carregados em perfeitas condições e nas quantidades de
              acordo com o relatório descrito acima.
            </div>
            <div className="sign">
              <div className="label">Transportador</div>
              <div className="sign-line">
                ____________________________________________
                <br />
              </div>
              <div className="label mt-2">RG</div>
              <div className="sign-line">
                ____________________________________________
              </div>
            </div>
          </div>
          <div className="col footer-divisions">
            <div className="orientations">
              Declaro que efetuei a conferência dos produtos relacionados e que
              recebi em perfeitas condições e nas quantidades de acordo com o
              relatório descrito acima.
            </div>
            <div className="sign">
              <div className="label">Conferente de loja</div>
              <div className="sign-line">
                ____________________________________________
                <br />
              </div>
              <div className="label mt-2">Data do recebimento</div>
              <div className="sign-line">
                ________ / ________ / _____________
              </div>
            </div>
          </div>
        </div>
        <div className="row dataAtual mt-3">
          <div className="col">Impresso em {dataDeImpressao}</div>
        </div>
      </div>
      {/*container-fluid*/}
      {loader}
    </div>
  );
}
