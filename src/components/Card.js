import React from 'react'
import { Link } from 'react-router-dom'

function Card({
  id,
  imgSrc,
  title,
  crew,
  rating,
}) {
  return (
    <div
      style={styles.container}
    >
      <img
        style={styles.img}
        src={imgSrc}
        alt={title}
      />

      <div style={styles.content}>
        <Link style={styles.title} to={`/${id}`}>{title}</Link>
        <span style={styles.rating}>
          <img src='/star.svg' alt="" />
          <b style={{ marginBottom: "16px" }}>
            {rating}
          </b>
        </span>

        <p>{crew}</p>
      </div>
    </div>
  )
}

const styles = {
  title: { color: "#111", fontWeight: "500" },
  container: {
    borderBottom: "1px solid #bbb",
    padding: "1.5em 2em",
    display: "flex",
    alignItems: "center",
    position: "relative"
  },
  img: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
  content: {
    marginLeft: "1em"
  },
  rating: {
    position: "absolute",
    right: "1em",
    top: "1em"
  }
}
export default Card