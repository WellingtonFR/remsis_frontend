import React from "react";
//eslint-disable-next-line
import styles from "./styles.css";
import loading from "../../img/load.gif";

export default function Loader() {
  return (
    <div className="fp-container">
      <img src={loading} className="fp-loader" alt="Carregando" />
    </div>
  );
}
