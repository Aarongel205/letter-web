import { useState } from 'react'
import heartBgImage from './assets/heartBgImage.gif'
import pinkFlowerBg from './assets/pinkFlowerBg.avif'
import kiss from './assets/kiss.gif'
import pleaseGif from './assets/pleaseGif.gif'


function App() {
  const [position, setPosition] = useState({
    top: 200,
    left: 200,
    position: 'none'
  });

  const [background, setBackground] = useState({
    backgroundImage: `url(${pinkFlowerBg})`,
  });

  const [updateText, setUpdateText] = useState('Do you love me?');
  const [changeDisplay, setchangeDisplay] = useState({
    display: 'none'
  });

  const [displayImg, setDisplayImg] = useState({
    display: 'block',
  })


  const updateDisplay = () => {
    setchangeDisplay({
      display: 'block'
    });

    setDisplayImg({
      display: 'none',
    })
  }

  const updateBg = () => {
    setBackground({
      backgroundImage: `url(${heartBgImage})`,
    })
    console.log('It works');
  }

  const changeText = () => {
      setUpdateText('');
  }

  const teleport = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;

    setPosition({
      top: Math.random() * maxY,
      left: Math.random() * maxX,
      position: 'absolute'
    });

  }
  return (
    <section style={{
      backgroundImage: background.backgroundImage
    }} className='flex flex-col w-full h-screen justify-center items-center bg-cover bg-no-repeat bg-center'>
      <img className='rounded-3xl w-35 md:w-50' src={kiss} style={{
        display: changeDisplay.display
      }}></img>
      <img className='w-20 rounded-3xl' src={pleaseGif} style={{
        display: displayImg.display,
      }}></img>
      <h1 className='mb-100'>{updateText}</h1>
      <div className='h-15'></div>
      <div className='max-w-200 flex flex-row px-4'>
        <button onClick={() => {updateBg(); changeText(); updateDisplay(); }} className='bg-[#ff8fab] w-15 md:w-25 mr-5 rounded-lg'>Yes</button>
        <div className='w-5'></div>
        <button onClick={teleport} style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        position: position.position
      }} className='bg-[#ff8fab] w-15 md:w-25 rounded-lg'>No</button>
      </div>
    </section>
  )
}

export default App