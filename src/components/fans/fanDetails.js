import { useEffect, useState } from "react"
import "./fanDetail.css"



export const FanDetails = () => {

    const [fan, updateFan] = useState({})




    useEffect(
        () => {
            const user = JSON.parse(localStorage.getItem("cage_user"))
            const cageUser = user.userId
            fetch(`http://localhost:8088/users/${cageUser}`)
                .then(response => response.json())
                .then((data) => {
                    updateFan(data)
                })
        },
        []

    )


    return <section className="fan">
        <h2>Profile Details</h2>
        <div class ="fanName">Name: {fan.name}</div>
        <div class ="fanEmail">Email: {fan.email}</div>
    </section>
}