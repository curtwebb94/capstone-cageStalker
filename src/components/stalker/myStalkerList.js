import { useEffect, useState } from "react"
import { Stalker } from "./stalker"
import "./myStalkerList.css"
 

export const StalkerList = () => {

    const [stalkers, setStalker] = useState([])


    const localCageUser = localStorage.getItem("cage_user")
    const cageUserObject = JSON.parse(localCageUser)
    
    useEffect(
        () => {
            getStalkers()
        },
        []
        )
        
        const getStalkers = () => {
            fetch(`http://localhost:8088/stalkers?userId=${cageUserObject.userId}&_expand=fighter`)
                .then(response => response.json())
                .then((stalkerArray) => {
                    // set athletes is the athletes array
                    setStalker(stalkerArray)
                })
            
        }
    



    return <>

        <h2 class ="myStalkerListHeader">myStalker</h2>
        <article className="StalkerList">
            {
                stalkers.map(stalker => <Stalker key={`stalker--${stalker.id}`}
                    id={stalker.fighterId}
                    name={stalker?.fighter.name}
                    userId={stalker.userId}
                    stalkerId={stalker.id}
                    getStalkers = {getStalkers}
                />)

            }
            

            
        </article>





    </>

}