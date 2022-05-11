import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const [imgsrc, setImgSrc] = useState("")
  const getPokemon404 = async ()=>{
    const res= await fetch(`https://pokeapi.co/api/v2/pokemon/404`)
    const data = await res.json()
    console.log(data)
    setImgSrc(data.sprites.front_default);
  }
  useEffect(()=>{
    getPokemon404()
  },[])
  return (
    <div className="404">
        <h1>404</h1>
        <img src={imgsrc} alt="404"/>
        <p>Sorry! That page can't be found</p>
        <Link to ="/" className='backHomeButton'> Back to homepage ... </Link>
    </div>
  ) 
}
