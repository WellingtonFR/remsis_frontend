import React from "react";
//eslint-disable-next-line
import styles from "./styles.css";
import { FiFrown } from "react-icons/fi";

export default function NotFoundPage({ location }) {
  return (
    <div className="container not-found-page">
      <h2>Página não encontrada</h2>
      <hr />
      <p>
        A página {location.pathname} não existe, a página foi removida ou o link
        que utilizou está errado
      </p>
      <FiFrown className="FiFrown" />
    </div>
  );
}
