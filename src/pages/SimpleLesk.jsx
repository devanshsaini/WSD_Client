import React, { useState } from 'react'

export const SimpleLesk = () => {
  const [sentence, setSentence] = useState("");
  const [word, setWord] = useState("");
  const [simpleLeskData, setData] = useState({});

  const findSimilarity = async (event) => {
    event.preventDefault();
    const res = await fetch(`http://localhost:8000/simple_lesk/${sentence}/${word}/`);
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  return (
    <>
      <h1 style={{ textDecoration: "underline" }}>Simple Lesk Algorithm</h1>
        <br />
      <form onSubmit={(event) => findSimilarity(event)}>
        <label htmlFor="sentence">Sentence:   </label>
        <input
          value={sentence} onChange={(e) => setSentence(e.target.value)}
          type="text"
          placeholder='Enter a sentence'
        />
        <br />
        <label htmlFor="sentence">Word: </label>
        <input
          value={word} onChange={(e) => setWord(e.target.value)}
          type="text"
          placeholder='Enter word for disambiguation'
        />
        <br />
        <button>Get disambiguation</button>
      </form>

      {Object.keys(simpleLeskData).length > 0 &&
        <div>
        <h3 style={{ textTransform: 'capitalize' }}>The disambiguated meaning is: {simpleLeskData?.sense}</h3>
        <h3 style={{ textTransform: 'capitalize' }}>The weight vector is: {simpleLeskData?.weights}</h3>
      </div>}
    </>
  )
}
