import React from "react";
import { Link } from "react-router-dom";

function Header({
  isBack
}) {
  return (
    <header
      style={styles.heading}
    >

      {isBack ? (
        <Link to="/" style={{ color: "#fff" }}>
          <img src='/left.svg' style={{ marginRight: "1em" }} alt="" />
          Back To Menu
        </Link>
      ) : (
        <>
          <h3>Movie Catalogue</h3>
          <Link style={styles.profile} to="/profile">My Profile</Link>
        </>
      )
      }

    </header >
  );
}

const styles = {
  heading: {
    padding: "1em 2em",
    background: "#415765",
    color: "#fff",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "50",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "50px"
  },
  profile: {
    color: "#fff"
  }
};

export default Header;
