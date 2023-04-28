import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"


export const ApplicationViews = () => {


const localCageUser = localStorage.getItem("cage_user")
const cageUserObject = JSON.parse(localCageUser)

if (cageUserObject.fan) {
    //return user views
   return <CustomerViews/>

 } else {
    //return employee views
    return <EmployeeViews/>

 }


}