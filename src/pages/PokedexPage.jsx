import { useSelector } from "react-redux"
import useFecth from "../hooks/useFecth"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/SelectType"
import './styles/PokedexPage.css'


const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

 const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  const [pokemons, getAllPokemons, getPokemonsByType] = useFecth(url)

  useEffect(() => {
    if(selectValue === 'allPokemons' ) {
      getAllPokemons()
    } else {
      getPokemonsByType(selectValue)
    }
    
  },[selectValue])

  const inputSearch = useRef()

 const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
 }

 const cbFilter = poke => poke.name.includes(inputValue)

 

 

 

  return (
    <div>
      <header>
        <div className="header__container">
          <div className="header__red"></div>
          <div className="header__black"></div>
          <a href="/"> <img className="header__img" src="./src/assets/pokedex.png" alt="" /></a>
         
        </div> 
      </header>
      <p className="poke__text"><span className="poke__span">Welcome {trainer}</span>, here you can find your favorite pokemon</p>
      
      <form className="poke__form" onSubmit={handleSubmit}>
        <input className="poke__form-input" ref={inputSearch} type="text" />
        <button className="poke__form-button" >Search</button>
      </form>
      <SelectType setSelectValue={setSelectValue}/>
      <div className="pokecard__container">
        {
        pokemons?.results.filter(cbFilter).map(poke => (
           <PokeCard
            key={poke.url}
            url = {poke.url}
          />
        ))
        }
      </div>
    </div>
  )
}

export default PokedexPage