import { useState } from 'react'

import './scss/main.scss';
import Apiposts from './components/apiposts/Apiposts';

function App() {

  return (
    <>
    <div className='father'>
      <div className='container'>
        <Apiposts/>
      </div>
     
    </div>
    </>
  )
}

export default App