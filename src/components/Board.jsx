import { useEffect, useState } from "react";
import Card from "./Card";

import getGif from "../utility/api";
import { shuffleArray } from "../utility/utility";

function Board({ setScore }) {
  const [imgSrcs, setImgSrcs] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  const handleClick = (title) => {
    if (clickedCards.includes(title)) {
      setScore(0);
      setClickedCards([]);
      setImgSrcs([...shuffleArray(imgSrcs)]);
    } else {
      setScore((prev) => prev + 1);
      setClickedCards([...clickedCards, title]);
      setImgSrcs([...shuffleArray(imgSrcs)]);
    }
  };

  // getGif fetch img srcs and title from api
  useEffect(() => {
    getGif().then((res) => {
      setImgSrcs(res);
    });
  }, []);

  return (
    <div className="board">
      {imgSrcs.length < 10 ? (
        <p>Loading...</p>
      ) : (
        imgSrcs.map((src, index) => (
          <Card
            src={src.url}
            title={src.title}
            key={index}
            handleClick={handleClick}
          />
        ))
      )}
    </div>
  );
}

export default Board;
