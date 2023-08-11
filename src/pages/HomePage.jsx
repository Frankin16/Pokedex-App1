import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'


const HomePage = () => {


  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex') 
  }
    

  return (
    <div className="home">
        <img className="home__image" src=".\src\assets\pokedex.png" alt="" />
        <h2 className="home__title" >Hi trainer!</h2>
        <p className="home__p" >To start, give me your name trainer</p>
        <form className="home__form" onSubmit={handleSubmit} >
            <input className="home__input" ref={inputTrainer} type="text" />
            <button className="home__button" >Gotta catch'em all!</button>
        </form>
        <footer>
          <div className="footer__red"></div>
          <div className="footer__black"></div>
          
        </footer>
    </div>
    
  )
}

export default HomePage