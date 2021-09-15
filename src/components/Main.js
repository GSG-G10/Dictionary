import React from "react";
import Card from "./Card";
function Main(props) {
  const { cardsData } = props;
  console.log('cardsData',cardsData)
  return (
    <main>
      <div className="bowl_main">
        <ul>
        {cardsData.length>0 ? cardsData.map((ele,i) => <Card key={i}word={ele.word} meanings={ele.meanings} />)
          : ""}
          </ul>
      </div>
    </main>
  );
}

export default Main;

   // return console.log( `key=${i}, word=${ele.word} ,meanings=${ele.meanings}`)