import { useEffect } from "react"
import useFecth from "../hooks/useFecth"
import './styles/SelectType.css'


const SelectType = ({setSelectValue}) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getAllTypes] = useFecth(url)

    useEffect(() => {
        getAllTypes()
    }, [])

    const handleChange = e => {
        setSelectValue(e.target.value) 
    }

  return (
   <select className="select" onChange={handleChange} >
    <option className="select-content" value="allPokemons">All Pokemons</option>
    {
        types?.results.map(type => (
            <option className="select-content" key={type.url} value={type.url}>{type.name}</option>
        ))
    }
   </select>
  )
}

export default SelectType