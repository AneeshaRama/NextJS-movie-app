import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import { requests } from "../utils/requests";

const Home = ({ results }) => {
  console.log(results);
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
  console.log(requests[genre]);

  const request = await fetch(
    // `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28,18
    // }`
    `https://api.themoviedb.org/3${
      requests[genre].url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  console.log(request.results);
  return {
    props: {
      results: request.results,
    },
  };
}

export default Home;
