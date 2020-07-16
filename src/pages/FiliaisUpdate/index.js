import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useParams, useHistory, Link } from "react-router-dom";
import moment from "moment";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import UseLoader from "../../hooks/UseLoader";

export default function FiliaisUpdate() {
  const [loader, showLoader, hideLoader] = UseLoader();
  const [filial, setFilial] = useState([]);
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    populateData();
  }, []);

  async function populateData() {
    showLoader();
    await api.get(`/filiais/findById/${id}`).then((response) => {
      hideLoader();
      setFilial(response.data[0]);
    });
  }

  const handleInputChange = (e) => {
    e.persist();
    setFilial({ ...filial, [e.target.name]: e.target.value });
  };

  async function handleUpdateFilial(e) {
    e.preventDefault();

    const data = {
      numeroFilial: filial.numeroFilial,
      endereco: filial.endereco,
      numeroEndereco: filial.numeroEndereco,
      complemento: filial.complemento,
      cidade: filial.cidade,
      estado: filial.estado,
      nomeFantasia: filial.nomeFantasia,
      updated_at: moment().format("DD/MM/YYYY hh:mm:ss a"),
    };

    try {
      showLoader();
      await api.put(`/filiais/update/${id}`, data).then(() => {
        hideLoader();
        Swal.fire({
          title: "Alterado com sucesso !",
          icon: "success",
          timer: 1100,
          showConfirmButton: false,
        });
      });
      history.push("/filiais");
    } catch (err) {
      hideLoader();
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
    <div className="filiais container-fluid">
      <h1>Alteração de dados da Filial</h1>
      <small>Modifique as informações e clique em alterar</small>
      <form onSubmit={handleUpdateFilial} id="formCreateFiliais">
        <hr />
        <div className="form-group">
          <label htmlFor="numeroFilial">Número da filial</label>
          <input
            type="number"
            name="numeroFilial"
            className="form-control disabled"
            maxLength="6"
            value={filial.numeroFilial}
            disabled
            required
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-row">
          <div className="form-group col-md-9">
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              name="endereco"
              className="form-control"
              required
              maxLength="50"
              value={filial.endereco}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="numeroEndereco">Número</label>
            <input
              type="number"
              name="numeroEndereco"
              className="form-control"
              value={filial.numeroEndereco}
              required
              onChange={handleInputChange}
            ></input>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="complemento">Complemento</label>
          <input
            type="text"
            name="complemento"
            className="form-control"
            value={filial.complemento}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            name="cidade"
            className="form-control"
            value={filial.cidade}
            required
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="estado">Estado</label>
          <select
            name="estado"
            className="form-control"
            required
            value={filial.estado}
            onChange={handleInputChange}
          >
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="nomeFantasia">Nome Fantasia</label>
          <input
            type="text"
            name="nomeFantasia"
            className="form-control"
            placeholder="Exemplo: LD182"
            maxLength="20"
            value={filial.nomeFantasia}
            required
            onChange={handleInputChange}
          ></input>

          <div className="row buttons-submit">
            <div className="col-md-8">
              <button type="submit" className="btn btn-primary btn-block">
                Alterar
              </button>
            </div>
            <div className="col-md-4">
              <Link to="/filiais" className="btn btn-dark btn-block">
                Cancelar
              </Link>
            </div>
          </div>
        </div>
      </form>
      {loader}
    </div>
  );
}
