import React from 'react'
import Card from './Card'
import Audio from './Audio'
import error404 from '../assets/Error404.gif'
import loader from '../assets/loader.gif'
function Main(props) {
  const { cardsData, foundErr, load } = props
  return (
    <main>
      {load ?  (<div className='bowl_load'> <img src={loader} /></div>)
      :
        foundErr ? (<div className='bowl_error'><h2>We dont found this word in dictionary! try search another word?</h2> <img src={error404} /></div>)
        : 
      <div className="bowl_main">
        {cardsData.length > 0 ? (
          <Audio phonetics={cardsData[0].phonetics} />
        ) : ('')}
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
     }
    </main>
  )
}

export default Main
