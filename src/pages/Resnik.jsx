import React, { useState } from 'react';

export const Resnik = () => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [resnikData, setResnikData] = useState({});

  const findSimilarity = async (event) => {
    event.preventDefault();
    const res = await fetch(`http://192.168.0.107:8000/resnik/perform-similarity/${firstWord}/${secondWord}/`);
    const data = await res.json();
    setResnikData(data);
  };

  return (
    <>
      <h1>Resnik Algorithm</h1>
      <br />
      <form onSubmit={(event) => findSimilarity(event)}>
        <input type="text" value={firstWord} onChange={(e) => setFirstWord(e.target.value)} placeholder='Enter your word' />
        <input type="text" value={secondWord} onChange={(e) => setSecondWord(e.target.value)} placeholder='Enter your word' />
        <button>Find similarity</button>
      </form>

        <div id="resnik-data">
          <h3 style={{ textTransform: 'capitalize' }}>{firstWord} Definition: {resnikData.definition1}</h3>
          <h3 style={{ textTransform: 'capitalize' }}>{secondWord} Definition: {resnikData.definition2}</h3>
          <h3>Similarity: {resnikData.similarity}</h3>
        </div>
    </>
  )
}
