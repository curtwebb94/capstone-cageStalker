import { Link } from "react-router-dom"
import "./myStalkerList.css"


export const Stalker = ({ id, name, userId, stalkerId, getStalkers }) => {



    const deleteButton = () => {
        return <button onClick={(evt) => {
            evt.preventDefault()
            fetch(`http://localhost:8088/stalkers/${stalkerId}`, {
                method: "DELETE"
            })
                .then(() => {getStalkers()})
                
                

        }} className="delete_button">Delete</button>

    }



    return <section
        className="stalkerList">
        <div><Link to={`/athletes/${id}`}> {name} </Link></div>
        <div class="deleteButton">
            {
                deleteButton()
            }
        </div>

    </section>
}
