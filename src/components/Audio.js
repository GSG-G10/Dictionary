import React from 'react'
function Audio(props) {
  const { phonetics } = props
  return (
    <div className='wrapper_audio'>
      <audio controls autoPlay>
        {' '}
        <source src={phonetics[0].audio} type="audio/ogg" />{' '}
      </audio>
    </div>
  )
}
export default Audio
