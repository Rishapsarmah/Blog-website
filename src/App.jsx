import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./About/About"
import HeroJs from "./Hero-js/HeroJs"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import BlogPage from "./BlogPage"

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HeroJs />} />
					<Route path="/about" element={<About />} />
					<Switch>
						<Route path="/blog/:slug">
							<BlogPage />
						</Route>
					</Switch>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}
export default App
