import React from 'react'
import SmallCard from './SmallCard'
function Card(props) {
  const { meanings, word } = props
  return (
    <li>
      <div>
        <h3>{word}</h3>
        {meanings
          ? meanings.map((ele, i) => {
              return <SmallCard data={ele} key={i} />
            })
          : ''}
      </div>
    </li>
  )
}
export default Card
