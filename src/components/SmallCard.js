import React from 'react'
function SmallCard(props) {
  const { data } = props
  return (
    <div className='line_info'>
      <div className="part_speech">
          <span>Part Of Speech: <span className='word_type_speech'>{data.partOfSpeech}</span></span>
      </div>

      <ul className='content_list_line'>
        {data.definitions? data.definitions.map((ele,i) => {
              return (
                <li className='content_li' key={i}>
                  <p>{ele.definition} </p>
                </li>
              )
            }) : null}
      </ul>

    </div>
  )
}
export default SmallCard
