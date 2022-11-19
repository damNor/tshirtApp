import React from 'react'
import './Display.css';

const Display = ({display, textFormat, textColor }) => {
    console.log('textFormat',textFormat)
    console.log('display',display)
  return (
    <div className='card card-content'>
        <div className='imgTshirt text-center'>
            <img className='img-responsive' 
            src ={`/${display.tshirtColor}.png`}
            alt="img-Tshirt"
            />
        </div>
        <div className='memeText text-center'>
            <div className='upperText'>
                <p style={{fontSize:textFormat, color: display.textColor}}>{display.upperText}</p>
            </div>
            <img 
                src={`${display.url}` || '/400x300.png'}
                alt='meme-text'
                />
            <div className='lowerText'>
                <p style={{fontSize:textFormat, color:display.textColor}}>{display.lowerText}</p>
            </div>
        </div>
    </div>
  )
}

export default Display