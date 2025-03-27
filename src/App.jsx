"use client"
import { Suspense } from 'react'
import './App.css'
import Countries from './component/countryes/Countries'
import { ErrorBoundary } from 'react-error-boundary'

const countresPromise = fetch('https://restcountries.com/v3.1/all')
   .then(res => res.json())

function App() {

  return (
    <>
      
      <h1>React World On the GO......</h1>

     <ErrorBoundary fallback={<h2>data fetching is error..........</h2>}>
        <Suspense fallback={<h2>data loading.......</h2>}>
          <Countries countresPromise={countresPromise}/>
        </Suspense>
     </ErrorBoundary>
      
    </>
  )
}

export default App
