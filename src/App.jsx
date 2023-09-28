import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Translate from './Components/Translate'

function App() {
 

  return (
    <>
    <h1 className='font-script m-1 p-2 text-3xl font-bold text-[#5B7C99] flex flex-wrap'>
          Welcome to &nbsp; <span className='text-orange-400'> Linguistik Oh!</span>
        </h1>
        <p className='font-script font-semibold  m-2 text-lg max-w-20 max-h-30 mb-8 pb-8 text-primary mt-2 p-2'>Unlock a World of Languages with Our Free Translator Web App<br className=' sm:block hidden' /> Seamlessly Translate Text for Clear Communication!</p>
     <Translate></Translate>
    </>
  )
}

export default App
