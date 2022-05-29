import React, { useState } from "react";

export const Resnik = () => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [resnikData, setResnikData] = useState({});

  const findSimilarity = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:8000/resnik/${firstWord}/${secondWord}/`
      );
      const data = await res.json();
      setResnikData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textDecoration: "underline" }}>Resnik Algorithm</h1>
      <br />
      <form onSubmit={(event) => findSimilarity(event)}>
        <label htmlFor="firstWord">First Word: </label>
        <input
          type="text"
          value={firstWord}
          onChange={(e) => setFirstWord(e.target.value)}
          placeholder="Enter your word"
        />
        <br />
        <br />
        <label htmlFor="secondWord">Second Word: </label>
        <input
          type="text"
          value={secondWord}
          onChange={(e) => setSecondWord(e.target.value)}
          placeholder="Enter your word"
        />
        <br />
        <br />
        <button>Find similarity</button>
      </form>

      {Object.keys(resnikData).length > 0 && (
        <div id>
          <h3 style={{ textTransform: "capitalize" }}>
            {firstWord} Definition: {resnikData.definition1}
          </h3>
          <h3 style={{ textTransform: "capitalize" }}>
            {secondWord} Definition: {resnikData.definition2}
          </h3>
          <h3>Similarity: {resnikData.similarity}</h3>
        </div>
      )}
    </div>
  );
};
