import React, { useEffect, useState } from "react";
import { service } from "../services";

import Card from "../components/Card";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    service.getAllMovies().then(({ items }) => {
      setMovies(items?.slice(0, 20));
    })

    return () => { }
  }, []);

  return (
    <>
      <Header />
      <div style={{ marginTop: "5.5em" }}>
        {movies.length > 0 ?
          movies.map(({ id, fullTitle, image, crew, imDbRating }) => (
            <Card key={id} id={id} title={fullTitle} imgSrc={image} crew={crew} rating={imDbRating} />
          ))
          : (
            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <Spinner height={200} width={200} />
            </div>
          )}

      </div>
    </>
  );
}

export default Homepage;
