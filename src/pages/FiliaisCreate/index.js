import React, { useState } from "react";
import Swal from "sweetalert2";
// eslint-disable-next-line
import styles from "./styles.css";
import api from "../../services/api";
import UseLoader from "../../hooks/UseLoader";

export default function FiliaisCreate() {
  const [loader, showLoader, hideLoader] = UseLoader();
  const [numeroFilial, setNumeroFilial] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numeroEndereco, setNumeroEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");

  async function handleNewFilial(e) {
    e.preventDefault();

    const data = {
      numeroFilial,
      endereco,
      numeroEndereco,
      complemento,
      cidade,
      estado,
      nomeFantasia,
    };

    try {
      showLoader();
      await api.post("/filiais/create", data).then(() => {
        hideLoader();
        Swal.fire({
          title: "Cadastrado com sucesso !",
          icon: "success",
        });
      });
      document.querySelector("form").reset();
    } catch (err) {
      hideLoader();
      const { data } = err.response;
      Swal.fire({
        title: "Erro ao cadastrar",
        text: data.message,
        icon: "error",
        confirmButtonText: "Voltar",
      });
    }
  }

  return (
    <div className="filiais container-fluid">
      <h1>Cadastro de Filiais</h1>
      <form onSubmit={handleNewFilial} id="formCreateFiliais">
        <hr />
        <div className="form-group">
          <label htmlFor="numeroFilial">Número da filial</label>
          <input
            type="number"
            name="numeroFilial"
            className="form-control"
            maxLength="6"
            required
            onChange={(e) => setNumeroFilial(e.target.value)}
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
              maxLength="70"
              onChange={(e) => setEndereco(e.target.value)}
            ></input>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="numeroEndereco">Número</label>
            <input
              type="number"
              name="numeroEndereco"
              className="form-control"
              required
              onChange={(e) => setNumeroEndereco(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="complemento">Complemento</label>
          <input
            type="text"
            name="complemento"
            className="form-control"
            onChange={(e) => setComplemento(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            name="cidade"
            className="form-control"
            required
            onChange={(e) => setCidade(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="estado">Estado</label>
          <select
            name="estado"
            className="form-control"
            required
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="">Selecione</option>
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
            required
            onChange={(e) => setNomeFantasia(e.target.value)}
          ></input>

          <div className="row buttons-submit">
            <div className="col-md-8">
              <button type="submit" className="btn btn-primary btn-block">
                Cadastrar
              </button>
            </div>
            <div className="col-md-4">
              <button type="reset" className="btn btn-dark btn-block">
                Limpar
              </button>
            </div>
          </div>
        </div>
      </form>
      {loader}
    </div>
  );
}
