import { useEffect } from "react"
import useFetch from "../hooks/useFecth"
import {  useParams } from "react-router-dom"
import './styles/PokeIdPage.css'

export const PokeIdPage = () => {

  const {id} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [id]) 

  const firstType = pokemon?.types[0].type.name

  return (
      <article>
        <header>
        <div className="header__container">
            <div className="header__red"></div>
            <div className="header__black"></div>
          <a href="/"> <img className="header__img" src="./src/assets/pokedex.png" alt="" /></a>
         
        </div> 
        </header>
        
        <div className="container">
        <section className="idCard">
          <header className={`pokecard__header ${firstType}-gradient`}>
        <img className="poke__image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <div>
          <h2 className="idCard__name">{pokemon?.name}</h2>
          <hr className="idCard__hr" />
        </div> 

        <div className="idCard__weigth-container" >
          <h3 className="idCard__weigth-title">Weight</h3>
          <h4 className="idCard__weigth">{pokemon?.weight}</h4>
        </div>
        
          <div className="container2">
            <div className="type">
              <h3 className="type__title">Type</h3>
              <ul className="type__ul">{pokemon?.types.map(typeInfo => (
                        <li className="pokecard__typename" key={typeInfo.type.url} > 
                        {typeInfo.type.name} 
                        </li>
                    ))}
              </ul>
            </div>
            
            <div className="abilities">
                <h3 className="abilities__title" >Abilities</h3>
              <ul className="abilities__ul">
                {pokemon?.abilities.map(abilitiesInfo => (
                  <li key={abilitiesInfo.ability.url} >
                    {abilitiesInfo.ability.name}
                  </li>
                ))}
              </ul>
              </div>
            </div>

            <div className="stats__container">
            <div className="stats">
              <h3 className="stats__title">Stats</h3>      
            <ul className="stats__list">
              {
            pokemon?.stats.map(statInfo => (
                        <li className="pokecard__stat" key={statInfo.stat.url} >
                             <h4 className="pokecard__stat__name"> {statInfo.stat.name}</h4>
                            <span className="pokecard__stat__value" >{statInfo.base_stat}</span>
                           
                        </li>
                    ))
            }
            </ul>
            </div>
            </div>


                    

          
         
        </section>
        </div>
      </article>
  )
}

export default PokeIdPage