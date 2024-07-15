import React, { useState, useEffect } from "react"
import { MdBrightness5, MdBrightness6 } from "react-icons/md"
import "./Header.css"
function Header() {
	const [theme, setTheme] = useState("light")

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark")
			document.querySelector(".Header").style = "dark"
		} else {
			setTheme("light")
			document.querySelector(".Header").style = "light"
		}
	}

	useEffect(() => {
		document.body.className = theme
	}, [theme])

	return (
		<>
			<nav className="border-b shadow-2xl h-[6rem] flex sticky top-0 bg-white w-[800px] md:w-[auto]">
				<div className={`Header ${theme}`}></div>
				<a href="/">
					<div className="text-2xl p-6 flex justify-start items-start">
						<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
							DEVELOPER'S
						</span>{" "}
						BLOG
					</div>
				</a>
				<div className="md:justify-center flex md:items-center md:pl-[18%]">
					<input
						type="text"
						placeholder="Search"
						className="hidden border-black border focus:outline-4 w-[16em] h-[50%] rounded-lg"
					/>
				</div>
				<div className="flex justify-around items-center gap-8 pl-[5rem]">
					<div>
						<a href="/about">About</a>
					</div>
					<div>
						<a href="">Project</a>
					</div>
				</div>
				<div className="flex justify-end items-center w-[100%] pr-[5rem]">
					<button onClick={toggleTheme}>
						{theme === "light" ? <MdBrightness6 /> : <MdBrightness5 />}
					</button>
				</div>
			</nav>
		</>
	)
}

export default Header
