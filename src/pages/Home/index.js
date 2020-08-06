import React from "react";
// eslint-disable-next-line
import "./styles.css";
import logoMagalu from "../../img/logoMagalu.png";

export default function Home() {
  return (
    <div className="container-fluid home body-gradient-transition">
      <div className="cover-background">
        <div className="row">
          <div className="col-md-3">
            <img src={logoMagalu} className="img-fluid" alt="logoMagalu" />
          </div>
          <div className="col-md-6">
            <h1>REMSIS</h1>
            <p>Sistemas de transferência de produtos entre cds e filiais</p>
          </div>
        </div>
      </div>
    </div>
  );
}
