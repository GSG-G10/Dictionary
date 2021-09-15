import React from 'react'
import Card from './Card'
import Audio from './Audio'
function Main(props) {
  const { cardsData } = props

  return (
    <main>
      <div className="bowl_main">
        {cardsData.length > 0 ? (
          <Audio phonetics={cardsData[0].phonetics} />
        ) : (
          ''
        )}
        <ul>
          {cardsData.length > 0
            ? cardsData.map((ele, i) => (
                <Card
                  key={i}
                  word={ele.word}
                  meanings={ele.meanings}
                  phonetics={ele.phonetics}
                />
              ))
            : ''}
        </ul>
      </div>
    </main>
  )
}

export default Main
