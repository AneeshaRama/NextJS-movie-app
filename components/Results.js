import React from "react";
import Thumbnails from "./Thumbnails";

const Results = ({ results }) => {
  return (
    <>
      <div>
        {results.map((result) => (
          <Thumbnails key={result.id} result={result} />
        ))}
      </div>
    </>
  );
};

export default Results;
