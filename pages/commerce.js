import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ErrorPage from "./error-page";

export default function Discovery() {
  let [searchMovies, setSearchMovies] = useState([]);
  let [isError, setError] = useState(false);

  let urlString = `https://leposticheoms.layer.core-hlg.dcg.com.br/v1/Inventory/API.svc/web/SearchInventorySKU`;

  const apiCall = (event) => {
    const url = urlString;

    console.log(url + " o que chamou");
    fetch(url, {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        Page: {
          PageIndex: 0,
          PageSize: 100,
        },
        Where: "ProductID == 28814 && WarehouseId == 2",
      }),
      method: "POST",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Dados Incorretos");
        }
      })
      .then((result) => setSearchMovies(result.IsValid))
      .catch((error) => setError(true));
  };

  return (
    <div>
      <h3 className={styles.title}>Estoque</h3>

      <button className={styles.card} onClick={apiCall}>
        Verificar
      </button>

      {isError === true ? (
        <ErrorPage message={`Verifique as Credenciais`}></ErrorPage>
      ) : (
        <div className={styles.grid}>
          <span>Média: {searchMovies}</span>
        </div>
      )}
    </div>
  );
}
