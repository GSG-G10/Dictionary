import React from "react";

 function Main (props) {

console.log(props)

    return (
      <main>
        <div className="bowl_main">{props.cardData}</div>
      </main>
    );
}

export default Main;
