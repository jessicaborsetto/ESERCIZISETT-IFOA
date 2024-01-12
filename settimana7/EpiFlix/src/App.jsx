import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';

function App() {
//aggiungere lo stato dei film = prima è vuoto
const [moviesLOTR, setMoviesLOTR] = useState([])          //LOTR
const [moviesMarvel, setMoviesMarvel] = useState([])  //avengers
const [moviesHp, setMoviesHP] = useState([])          //harry potter

const getMoviesLOTR = async () => {
  const urlSeriesLOTR = 'https://www.omdbapi.com/?apikey=3dd63da1&s=lord%20of%20the%20rings&type=movie';
  const response = await fetch(urlSeriesLOTR);
  const responseJson = await response.json()
  setMoviesLOTR(responseJson.Search)
}

useEffect(()=>{
  getMoviesLOTR();
}, []
)


const getMoviesMarvel = async () => {
  const urlSeriesMarvel = 'https://www.omdbapi.com/?apikey=3dd63da1&s=avengers';
  const response = await fetch(urlSeriesMarvel);
  const responseJson = await response.json()
  setMoviesMarvel(responseJson.Search)
}

useEffect(()=>{
  getMoviesMarvel();
}, []
)


const getMoviesHP = async () => {
  const urlSeriesHp = 'https://www.omdbapi.com/?apikey=3dd63da1&s=harry%20potter';
  const response = await fetch(urlSeriesHp);
  const responseJson = await response.json()
  setMoviesHP(responseJson.Search)
}

useEffect(()=>{
  getMoviesHP();
}, []
)

  return (
    <>
      <Navbar></Navbar>
      <h2 className='mx-4 mt-4 text-white'>Tempo di partire per Mordor con i bros&#129501;</h2>
        <div className='gallery'>
          <Movies movies={moviesLOTR}></Movies>
        </div>

        <h2 className='mx-4 mt-4 text-white'>Voglia di supereroi?&#129464;</h2>
        <div className='gallery'>
          <Movies movies={moviesMarvel}></Movies>
        </div>

        <h2 className='mx-4 mt-4 text-white'>Aggiungi un po' di magia&#10024;</h2>
        <div className='gallery'>
          <Movies movies={moviesHp}></Movies>
        </div>
      
    </>
  )
}

export default App
