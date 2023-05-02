import { useState } from "react"
import { FighterSearch } from "./athleteSearch"
import { AthleteList } from "./athleteList"

export const FighterContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <FighterSearch setterFunction={setSearchTerms} />
        <AthleteList searchTermState={searchTerms}/>
    </>
}