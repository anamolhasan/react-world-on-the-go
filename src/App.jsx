
import { Suspense } from 'react'
import './App.css'
import Countries from './component/countryes/Countries'

const countresPromise = fetch('https://restcountries.com/v3.1/all')
   .then(res => res.json())

function App() {

  return (
    <>
      
      <h1>React World On the GO......</h1>

    <Suspense fallback={<h2>data loding.......</h2>}>
      <Countries countresPromise={countresPromise}/>
    </Suspense>
      
    </>
  )
}

export default App
