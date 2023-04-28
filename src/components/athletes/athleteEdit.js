import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const FighterEdit = () => {
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

    const navigate = useNavigate()
    const {athleteId} = useParams()


    useEffect(() => {
       fetch(`http://localhost:8088/fighters/${athleteId}`)
           .then(response => response.json())
           .then((data) => {
               editInfo(data)
           })
   }, [athleteId])


   const handleSaveButtonClick = (event) => {
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



return (
    <form className="AthleteForm">
        <h2 className="AthleteForm__title">Edit Athlete Form</h2>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteName"><b><em> Name:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Athlete Name"
                        value={info.name}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.name = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteNickname"><b><em> Nickname:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Athlete Nickname"
                        value={info.nickname}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.nickname = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteImage"><b><em> Image:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Image URL"
                        value={info.picture}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.picture = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteHeight"><b><em>Height:</em></b> </label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Enter New Athlete Height in inches"
                        value={info.height}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.height = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteWeight"><b><em>Weight:</em></b> </label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Enter New Athlete Weight in pounds"
                        value={info.weight}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.weight = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteReach"><b><em>Reach:</em></b> </label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Enter New Athlete Reach"
                        value={info.reach}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.reach = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteAge"><b><em>Age:</em></b> </label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Enter New Athlete Age"
                        value={info.age}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.age = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteDebut"><b><em>Debut:</em></b> </label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Enter New Athlete Debut"
                        value={info.debut}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.debut = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthletePOB"><b><em>POB:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Athlete POB"
                        value={info.POB}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.POB = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteDivision"><b><em>Division:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Athlete Division"
                        value={info.division}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.division = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteStyle"><b><em>Fight Style:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Fight Style"
                        value={info.style}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.style = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteStrikeAccuracy"><b><em>Strike Accuracy % :</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Athlete Strike Accuracy % "
                        value={info.strikeAccuracyPercent}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.strikeAccuracyPercent = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteTakedownAccuracy"><b><em>Takedown Accuracy % :</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Athlete Takedown Accuracy %"
                        value={info.takedownAccuracyPercent}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.takedownAccuracyPercent = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteTakedownDefense"><b><em>Takedown Defense %:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Athlete Takedown Defense %"
                        value={info.takedownDefensePercent}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.takedownDefensePercent = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteWinsByMethod"><b><em>Wins by Method:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Format: KO/TKO 0 (0%) DEC 0 (0%) SUB 0 (0%)"
                        value={info.winsByMethod}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.winsByMethod = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteAverageFightTime"><b><em>Average Fight Time:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Format: mins:seconds"
                        value={info.averageFightTime}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.averageFightTime = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteRecord"><b><em>Record:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Format: 0-0-0 (W-L-D)"
                        value={info.record}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.record = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteBio"><b><em>Bio:</em></b> </label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Athlete Bio"
                        value={info.bio}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.bio = evt.target.value
                                editInfo(copy)
                            }
                        } >
                            </textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteActive"><b><em>Active:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Athlete active? YES or NO"
                        value={info.active}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.active = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteChampion"><b><em>Champion:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Athlete champion? YES or NO"
                        value={info.champion}
                        onChange={
                            (evt) => {
                                const copy = { ...info }
                                copy.champion = evt.target.value
                                editInfo(copy)
                            }
                        } />
                </div>
            </fieldset>



        
        
        
        
        <button
    onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
    className="btn btn-primary">
    Save Edit
</button>



</form>
)
}