import React from 'react'
import SmallCard from './SmallCard'
function Card(props) {
  const { meanings, word } = props
  return (
      <div className='bowl_data'>
        <h3 className='title_line'>{word}</h3>
        {meanings
          ? meanings.map((ele, i) => {
              return <SmallCard data={ele} key={i} />
            })
          : ''}
      </div>
  )
}
export default Card
