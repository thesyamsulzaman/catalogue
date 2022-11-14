import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import { service } from '../services';
import Spinner from "../components/Spinner";


const Detail = () => {
  const { movieId } = useParams("detail");
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    service.getMovieDetail(movieId).then((movie) => {
      setMovie(movie);
    })

    return () => { }
  }, [movieId]);

  return (
    <>
      <Header isBack={true} />
      <div style={styles.container}>
        {movie ? (
          <>
            <img
              style={styles.img}
              src={movie?.image}
              alt=""
            />

            <h1>
              {movie.title}
            </h1>
            <p>
              {movie.plot}
            </p>
          </>
        ) : (
          <div style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Spinner height={200} width={200} />
          </div>
        )}

      </div>
    </>
  )
}

const styles = {
  container: {
    padding: "1.5em 2em",
    marginTop: "6em"
  },
  img: {
    width: "100%",
    height: "500",
    objectFit: "cover",
    marginBottom: "1em"
  },

}

export default Detail