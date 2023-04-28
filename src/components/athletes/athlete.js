import { Link } from "react-router-dom"
import "./athleteList.css"

export const Athlete = ({ id, name }) => {

    return <section
        className="athleteList">
        <div><Link to={`/athletes/${id}`}> {name} </Link> </div>
    </section>
}