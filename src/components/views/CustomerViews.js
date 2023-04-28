import { Outlet, Route, Routes } from "react-router-dom"
import { AthleteList } from "../athletes/athleteList"
import { AthleteDetails } from "../athletes/athleteDetails"
import { FanDetails } from "../fans/fanDetails"
import { StalkerList } from "../stalker/myStalkerList"


export const CustomerViews = () => {
    return (

        <Routes>
            <Route path="/" element={
                <>
                    <h1>CageStalker 🥊</h1><br></br>
                    <div><b>"Know your fighter, know the fight!"</b></div> <br></br><br></br>

                    <Outlet />
                </>
            }>
                <Route path="profile" element={<FanDetails />} />
                <Route path="athletes" element={<AthleteList />} />
                <Route path="athletes/:athleteId" element={<AthleteDetails/>} />
                <Route path="myStalker" element={<StalkerList />} />







            </Route>
        </Routes>

    )


}