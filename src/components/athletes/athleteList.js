import { useEffect, useState } from "react"
import "./athleteList.css"
import { Athlete } from "./athlete"
import { useNavigate } from "react-router-dom"

export const AthleteList = ({searchTermState}) => {

    const [athletes, setAthletes] = useState([])
    const [filteredFighters, setFilteredFighters] = useState([])
    const user = JSON.parse(localStorage.getItem("cage_user"))
    const navigate = useNavigate()



    


    useEffect(
        () => {
            fetch(`http://localhost:8088/fighters?_sort=name`)
                .then(response => response.json())
                .then((athleteArray) => {
                    // set athletes is the athletes array
                    setAthletes(athleteArray)
                    setFilteredFighters(athleteArray)
                })
        },
        []
    )

    useEffect(
        () => {
            const searchedFighter = athletes.filter(athlete => athlete.name.toLowerCase().startsWith(searchTermState.toLowerCase()))
            setFilteredFighters(searchedFighter)
        },
        [searchTermState]
     )



    return <>

        <h2 class = "athleteListHeader">Fighters</h2>
        <button class = "fighterSearchButton" onClick ={() => navigate("/athletes/search")}>Fighter Search</button>
        <article className="athletesList">
           
            {
                filteredFighters.map(athlete => <Athlete key={`athlete--${athlete.id}`}
                    id={athlete.id}
                    name={athlete.name}
                />)

            }
             {
                 !user.fan
                 ? <button
                      onClick={() => navigate("/athletes/athletesForm")}
                      className="athleteFormButton">
                      Add Fighter Form
                  </button>
                  : ""
            }
           
        </article>





    </>

}