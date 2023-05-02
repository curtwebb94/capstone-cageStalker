import "./athleteSearch.css"


export const FighterSearch = ({setterFunction}) => {
    return (
        <div class ="SearchTextBar">
        <input 
        onChange={
            (changeEvent) => {
             setterFunction(changeEvent.target.value)
            }
        }
        type="text" placeholder="Search Fighter "/>
        </div>
    )
}