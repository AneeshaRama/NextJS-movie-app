import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import { requests } from "../utils/requests";

const Home = ({ results }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Results results={results} />
    </>
  );
};

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre].url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}

export default Home;
