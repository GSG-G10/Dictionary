import React from 'react'

function SmallCard(props) {
  const { data } = props
  return (
    <div>
      <span className="part-speech">{data.partOfSpeech}</span>
      <br />
      <ul>
        {data.definitions
          ? data.definitions.map((ele,i) => {
              return (
                <li key={i}>
                  <p>{ele.definition} </p>
                </li>
              )
            })
          : ''}
      </ul>
    </div>
  )
}
export default SmallCard
