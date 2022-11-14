import React from 'react'
import Header from '../components/Header'

function Profile() {
  return (
    <>
      <Header isBack={true} />
      <div style={styles.container}>
        <h1>About Me</h1>
        <img style={styles.profile} src="/profile.jpeg" alt="" />

        <p>
          Hi, I'm <b>Syamsul Zaman </b>, i'm a Software Developer based in Sukabumi. I'm also a Full time Computer Science Student at Nusa Putra University.
          I've been learning how to write Code since High School. I decided to stick with Web Development after getting my focus pulled in so many different directions.
          I have a knack for Frontend Development, i've spent hours and hours feeding my curiosity. It took me almost a year and half to finally be able to center things on the web.
        </p>

        <p>
          By far, my strongest Interests are on React.js, Typescript, Next.js, Frontend Architecture and some other cool Frontend related stuff.
          I'm currently obsessing over opportunities in Software Engineering/Web Development, I'd love to take a part in developing Modern Technologies just so that it fits-together and play-out to be a solution for the real world problem.
          I would appreciate every warm regards .
        </p>

      </div>
    </>
  )
}



const styles = {
  container: {
    padding: "1.5em 2em",
    marginTop: "4em"
  },
  profile: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    marginBottom: "1em"
  },

}


export default Profile


