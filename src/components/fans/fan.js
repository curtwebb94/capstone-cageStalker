import { Link } from "react-router-dom"


export const Fan = ({id, name, email}) => {
    return <section
        className = "fan">
          <div><Link to ={`/profile/${id}`}> {name} </Link> </div>
          <div><b>Fan Email:</b> {email}</div>
    </section>
}