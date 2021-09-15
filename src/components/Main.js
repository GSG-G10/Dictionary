import React from "react";
import Card from "./Card";
function Main(props) {
  const { cardsData } = props;
  return (
    <main>
      <div className="bowl_main">
        <ul>
        {cardsData ? cardsData.map((ele,i) => <Card cardKey={i}word={ele.word} meanings={ele.meanings} />)
          : ""}
          </ul>
      </div>
    </main>
  );
}

export default Main;

   // return console.log( `key=${i}, word=${ele.word} ,meanings=${ele.meanings}`)