import { CustomerNavBar } from "./CustomerNav"
import { EmployeeNavBar } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
     // grabs the user object as a string from the local storage(you can see this in the application in the inspect on the browser)
     const localCageUser = localStorage.getItem("cage_user")
     // sets the string user and turns into an object using the json.parse and the variable that was assigned to grab it
     const cageUserObject = JSON.parse(localCageUser)
    
     if (cageUserObject.fan) {
        //return employee views
       return <CustomerNavBar/>

     } else {
        //return customer views
        return <EmployeeNavBar/>
    
     }
}
