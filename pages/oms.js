import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import ErrorPage from "./error-page";
import Image from "next/image";
import { format } from "date-fns";
import Head from "next/head";

// gerar numero randomico
let randomic = Math.floor(Math.random() * 56000);

export default function Movieapi() {
  let [movieBudget, setMovieBudget] = useState("Não delcarado");
  let [movieOriginalTitle, setMovieOriginalTitle] = useState("");
  let [moviePortugueseTitle, setMoviePortugueseTitle] = useState("");
  let [movieOverview, setMovieOverview] = useState("");
  let [movieAverage, setMovieAverage] = useState("");
  let [movieReleaseDate, setMovieReleaseDate] = useState("");
  let [movieImage, setMovieImage] = useState();
  let [movieRatingCount, setMovieRatingCount] = useState("");
  let [moviePopularity, setMoviePopularity] = useState("");
  let [movieCountry, setMovieCountry] = useState("");
  let [movieGender0, setMovieGender0] = useState("");
  let [movieGender1, setMovieGender1] = useState("");
  let [movieLanguages, setMovieLanguages] = useState("");
  // let [movieId, setMovieId] = useState();
  let [isError, setError] = useState(false);

  let poster = "https://image.tmdb.org/t/p/original" + movieImage;

  // useEffect(() => {}, []);

  let testeBudget = 0;

  const apiCall = (event) => {
    const url = `https://api.themoviedb.org/3/movie/${randomic}?api_key=dd10bb2fbc12dfb629a0cbaa3f47810c&language=pt-BR`;
    console.log(`Movie Id:   ${randomic} `);

    fetch(url, {
      headers: new Headers({
        //Authorization: `${basic}`,
        //process.env.NEXT_PUBLIC_LE_AUTH,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw console.log("Erro 1");
        }
      })
      .then(
        (result) => (
          setMovieBudget(result.budget),
          setMovieOriginalTitle(result.original_title),
          setMoviePortugueseTitle(result.title),
          setMovieOverview(result.overview),
          setMovieAverage(result.vote_average),
          setMovieReleaseDate(result.release_date),
          setMovieImage(result.poster_path),
          setMovieCountry(result.production_countries[0].name),
          setMovieRatingCount(result.vote_count),
          setMoviePopularity(result.popularity),
          setMovieGender0(result.genres[0].name),
          setMovieGender1(result.genres[1].name),
          setMovieLanguages(result.spoken_languages[0].name)
        )
      )
      .catch((error) => setError(true));

    console.log(`Budget:   ${movieBudget} `);
  };

  return (
    <>
      <Head>
        <title>O que Assitir Hoje?</title>
        <meta name="keywords" content="movies,watch,review"></meta>
        <meta name="description" content="encontre tudo de nba aqui"></meta>
      </Head>

      <div>
        <h3 className={styles.title}>Que filme Ver Hoje?</h3>
        <h2 className={styles.grid}>
          {" "}
          <br />
          <label type="text">
            {/* <input
            required={true}
            type="text"
            value={movieId}
            onChange={(event) => setMovieId(event.target.value)}
          ></input> */}
          </label>
          <button onClick={apiCall}>Verificar</button>
        </h2>
        {isError === true ? (
          <ErrorPage message={``}></ErrorPage>
        ) : (
          <div>
            <div>
              <h1>
                <span>
                  Orçamento:{" "}
                  {movieBudget > testeBudget
                    ? movieBudget + " US$"
                    : "Valor Não Declarado"}
                </span>{" "}
                <br />
                <span>Nome Original: {`${movieOriginalTitle}`}</span> <br />
                <span>Nome Português: {`${moviePortugueseTitle}`}</span> <br />
                <span>Overview: {`${movieOverview}`}</span> <br />
                <span>Popularidade: {`${moviePopularity}`}</span> <br />
                <span>
                  Nota Média:{" "}
                  {`${movieAverage} - Nº de Votos: ${movieRatingCount} `}
                </span>{" "}
                <br />
                <span>
                  Data de Lançamento:
                  {movieReleaseDate.length > 0
                    ? format(new Date(movieReleaseDate), " dd/MM/yyyy")
                    : ""}
                </span>
                <br />
                <span>País de Origem: {movieCountry}</span> <br />
                <span>Língua Original: {movieLanguages}</span> <br />
                <span>
                  Genero:
                  {movieGender1.length > 0
                    ? ` ${movieGender0}, ${movieGender1} `
                    : ` ${movieGender0}`}
                </span>{" "}
                <br />
              </h1>
              <h1>
                <span>
                  {
                    <Image
                      src={poster}
                      alt="poster"
                      layout="fixed"
                      width="480"
                      height="720"
                    />
                  }
                </span>
              </h1>
              <br />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
