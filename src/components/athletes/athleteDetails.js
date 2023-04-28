import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./athleteDetails.css"
import { useNavigate } from "react-router-dom"

export const AthleteDetails = () => {

    const { athleteId } = useParams()
    const {userId} = useParams()
    const [fan, updateFan] = useState({})
    const [athlete, updateAthlete] = useState(
        {
            userId: "",
            fighterId: ""
        }
    )
    const [feedback, setFeedback] = useState("")
    const user = JSON.parse(localStorage.getItem("cage_user"))
    const navigate = useNavigate()
    const [info, editInfo] = useState({
        weight: 0,
        division: "",
        age: "",
        strikeAccuracyPercent: "",
        takedownAccuracyPercent: "",
        takedownDefensePercent: "",
        winsByMethod: "",
        averageFightTime: "",
        record: "",
        bio: "",
        active: "",
        champion: ""

    })
    

    useEffect(() => {
        if (feedback !== "") {
            // Clear feedback to make entire element disappear after 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])

    useEffect(
        () => {
            fetch(`http://localhost:8088/fighters?id=${athleteId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleAthlete = data[0]
                    updateAthlete(singleAthlete)
                })
        },
        [athleteId]
    )
    useEffect(
        () => {
            const user = JSON.parse(localStorage.getItem("cage_user"))
            const cageUser = user.userId
            fetch(`http://localhost:8088/users/${cageUser}`)
                .then(response => response.json())
                .then((data) => {
                    updateFan(data)
                })
        },
        [userId]

    )

    useEffect(() => {
        fetch(`http://localhost:8088/fighters/${athleteId}`)
            .then(response => response.json())
            .then((data) => {
                editInfo(data)
            })
    }, [athleteId])
 
 
    const handleEditButtonClick = (event) => {
     event.preventDefault()
 
     return fetch(`http://localhost:8088/fighters/${info.id}`, {
         method: "PUT",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(info)
     })
         .then(response => response.json())
         .then(() => {
             navigate("/athletes")
         })
 }


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */
            const athleteToSendToAPI = {
                userId: user?.userId,
                fighterId: parseInt(athleteId),
            }


        return fetch(`http://localhost:8088/stalkers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(athleteToSendToAPI)
            
        })
            .then(response => response.json())
            .then(() => {
                setFeedback("Athlete addeed to myStalker List!")
            })
            .then(() => {
                navigate("/athletes")
            })

    }


    return <section className="athleteDetails">
        <header class="athleteDetailsHeader"><b><em>{athlete.name} "{athlete.nickname}"</em></b> </header>
        <div><b><em></em></b> <img src={athlete.picture}></img></div>
        <div><b><em>Height:</em></b> {athlete.height} inches</div>
        <div><b><em>Weight:</em></b> {athlete.weight} lbs</div>
        <div><b><em>Reach:</em></b> {athlete.reach} inches</div>
        <div><b><em>Age:</em></b> {athlete.age}</div>
        <div><b><em>UFC Debut:</em></b> {athlete.debut}</div>
        <div><b><em>POB:</em></b> {athlete.POB}</div>
        <div><b><em>Division:</em></b> {athlete.division}</div>
        <div><b><em>Style:</em></b> {athlete.style}</div>
        <div><b><em>Striking Accuracy:</em></b> {athlete.strikeAccuracyPercent}</div>
        <div><b><em>Takedown Accuracy:</em></b> {athlete.takedownAccuracyPercent}</div>
        <div><b><em>Takedown Defense Accuracy:</em></b> {athlete.takedownDefensePercent}</div>
        <div><b><em>Wins by Method:</em></b> {athlete.winsByMethod}</div>
        <div><b><em>Average Fight Time:</em></b> {athlete.averageFightTime}</div>
        <div><b><em>Record:</em></b> {athlete.record}</div>
        <div><b><em>Bio:</em></b> {athlete.bio}</div>
        <div><b><em>Active:</em></b> {athlete.active}</div>
        <div><b><em>Champion:</em></b> {athlete.champion}</div>
        <div class = "fanInfo"><b><em>User:</em></b> {fan.name} ID: {fan.id}</div>

        {
            user.fan
           ? <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="stalkerAddButton">
                Add to Stalker List
            </button>
            : ""
        }

    
         {
            !user.fan
            ? <button
                 onClick={() => navigate("editForm")}
                 className="editFormButton">
                 Edit Fighter Form
             </button>
             : ""
       }
    

    </section>

    

}

