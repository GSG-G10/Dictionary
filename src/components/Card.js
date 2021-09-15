import React from 'react'
import smallCard from './smallCard'
 function Card(props) {
  const {meanings,word,cardKey}=props
  console.log( {meanings,word,cardKey})
    return (
 
       <li key={cardKey}>
         <span>{word}</span>
       </li>
            // <li key={cardKey} className="card">
            // <h3>{word}</h3>
            //  {/* {
            //      meanings.map((ele)=>{
            //      <smallCard data={ele}/>
            //      })
            //  } */}
            // </li>

    )
}
export default Card