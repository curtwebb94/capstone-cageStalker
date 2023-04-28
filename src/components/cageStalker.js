import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { Login } from "./auth/login"
import { Register } from "./auth/register"
import "./cageStalker.css"
import { NavBar } from "./nav/NavBar"


export const CageStalker = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
                    <NavBar />
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
}

