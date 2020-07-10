import React from "react";
import api from "../../services/api";

export default function BackupDB() {
  async function handleDownload() {
    await api({
      url: "http://localhost:3001/backupDB",
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "basePrincipal.db");
      document.body.appendChild(link);
      link.click();
    });
  }
  return (
    <div>
      <button className="btn btn-primary">Backup</button>
    </div>
  );
}
