import { useState, useEffect } from "react";
import "./eventDetails.css"
import { Link } from "react-router-dom";


export const EventDetails = () => {
    const [athlete1, updateAthlete] = useState(
        {
            id: "",
            fighterId: "",
            picture: "",
            height: "",
            weight: "",
            record: "",
            name: ""
        }
    )
    const [athlete2, updateAthlete2] = useState(
        {
            userId: "",
            fighterId: "",
            name: ""
        }
    )


    useEffect(
        () => {
            fetch(`http://localhost:8088/fighters/6`)
                .then(response => response.json())
                .then((athleteArray) => {
                    // set athletes is the athletes array
                    updateAthlete(athleteArray)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/fighters/23`)
                .then(response => response.json())
                .then((athleteArray) => {
                    // set athletes is the athletes array
                    updateAthlete2(athleteArray)
                })
        },
        []
    )


    return <section className="athleteDetails">

        <div><h2 class="eventTitle">UFC 288</h2></div>
        <div><h1 class="fighterTitle">STERLING VS CEJUDO</h1></div>
        <footer>Sat, May 6 / 9:00 PM CDT</footer>
        <footer>Prudential Center, Newark United States</footer>
        
        <article class ="fighterCards">
        <div class="card">
            <img class ="athlete1Image" src={athlete1.picture} alt="..."/>
            <div class="card-body1">
                <h2 class="card-title">{athlete1.name}</h2>
                <p class="card-text">Height: {athlete1.height} inches</p>
                <p class="card-text">Weight: {athlete1.weight} lbs</p>
                <p class="card-text">{athlete1.record}</p>
                <Link to={`/athletes/${athlete1.id}`}>More Info</Link>
            </div>
        </div>

        <article class = "VS">
            <h1>VS</h1>
        </article>

        
        <div class="card">
            <img class ="athlete2Image" src={athlete2.picture} alt="..."/>
            <div class="card-body2">
                <h2 class="card-title2">{athlete2.name}</h2>
                <p class="card-text">Height: {athlete1.height} inches</p>
                <p class="card-text">Weight: {athlete1.weight} lbs</p>
                <p class="card-text">{athlete2.record}</p>
                <Link to={`/athletes/${athlete2.id}`}>More Info</Link>
            </div>
        </div>
        </article>

       


    </section>


}