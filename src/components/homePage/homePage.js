import './homePage.css'
import { Link } from 'react-router-dom'


export const HomePageImage = () => {
  return (
    <article>
      <div><h2 class = "eventTitle">UFC 288</h2></div>
      <div><h1 class = "fighterTitle">STERLING VS CEJUDO</h1></div>
      <footer>Sat, May 6 / 9:00 PM CDT</footer>
      <footer>Prudential Center, Newark United States</footer>
      <Link to = "/eventDetails">Event Details </Link>
  <img src = "https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/image/2023-04/050623-ufc-288-sterling-vs-cejudo-EVENT-ART_0.jpg?h=d1cb525d&itok=R4QFZOQ1"></img>
  </article>
  )
}

