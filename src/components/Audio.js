import React from 'react'

function Audio(props) {
  const { phonetics } = props
  return (
    <div>
      <audio controls>
        {' '}
        <source src={phonetics[0].audio} type="audio/ogg" />{' '}
      </audio>
    </div>
  )
}
export default Audio
