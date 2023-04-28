import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./athleteForm.css"

export const AthleteForm = () => {

    const navigate = useNavigate()


    const [athletes, update] = useState({

        picture: "",
        name: "",
        nickname: "",
        height: "",
        weight: "",
        reach: "",
        age: "",
        debut: "",
        POB: "",
        division: "",
        style: "",
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

    const [fighters, setFighters] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/fighters`)
                .then(response => response.json())
                .then((fighterArray) => {
                    // set tickets is the ticket array but a setter function, and changes the empty "tickets" array to the array of the tickets
                    setFighters(fighterArray)

                })

        },
        []
    )


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const fighterToSendToAPI = {
            picture: athletes.picture,
            name: athletes.name,
            nickname: athletes.nickname,
            height: athletes.height,
            weight: athletes.weight,
            reach: athletes.reach,
            age: athletes.age,
            debut: athletes.debut,
            POB: athletes.POB,
            division: athletes.division,
            style: athletes.style,
            strikeAccuracyPercent: athletes.strikeAccuracyPercent,
            takedownAccuracyPercent: athletes.takedownAccuracyPercent,
            takedownDefensePercent: athletes.takedownDefensePercent,
            winsByMethod: athletes.winsByMethod,
            averageFightTime: athletes.averageFightTime,
            record: athletes.record,
            bio: athletes.bio,
            active: athletes.active,
            champion: athletes.champion
        }

        return fetch(`http://localhost:8088/fighters`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fighterToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/athletes")
            })

    }

    return (
        <form className="AthleteForm">
            <h2 className="AthleteForm__title">New Athlete Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="AthleteName"><b><em> Name:</em></b> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Athlete Name"
                        value={athletes.name}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.name = evt.target.value
                                update(copy)
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
                        value={athletes.nickname}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.nickname = evt.target.value
                                update(copy)
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
                        value={athletes.picture}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.picture = evt.target.value
                                update(copy)
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
                        value={athletes.height}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.height = evt.target.value
                                update(copy)
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
                        value={athletes.weight}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.weight = evt.target.value
                                update(copy)
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
                        value={athletes.reach}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.reach = evt.target.value
                                update(copy)
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
                        value={athletes.age}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.age = evt.target.value
                                update(copy)
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
                        value={athletes.debut}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.debut = evt.target.value
                                update(copy)
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
                        value={athletes.POB}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.POB = evt.target.value
                                update(copy)
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
                        value={athletes.division}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.division = evt.target.value
                                update(copy)
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
                        value={athletes.style}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.style = evt.target.value
                                update(copy)
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
                        value={athletes.strikeAccuracyPercent}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.strikeAccuracyPercent = evt.target.value
                                update(copy)
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
                        value={athletes.takedownAccuracyPercent}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.takedownAccuracyPercent = evt.target.value
                                update(copy)
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
                        value={athletes.takedownDefensePercent}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.takedownDefensePercent = evt.target.value
                                update(copy)
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
                        value={athletes.winsByMethod}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.winsByMethod = evt.target.value
                                update(copy)
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
                        value={athletes.averageFightTime}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.averageFightTime = evt.target.value
                                update(copy)
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
                        value={athletes.record}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.record = evt.target.value
                                update(copy)
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
                        value={athletes.bio}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.bio = evt.target.value
                                update(copy)
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
                        value={athletes.active}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.active = evt.target.value
                                update(copy)
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
                        value={athletes.champion}
                        onChange={
                            (evt) => {
                                const copy = { ...athletes }
                                copy.champion = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="buttonForm">
                Add Fighter
            </button>
            </form>
    )


    }



