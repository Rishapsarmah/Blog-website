import React from "react"
import { MdBrightness5 } from "react-icons/md"
import { MdBrightness6 } from "react-icons/md"
function Header() {
	return (
		<>
			<nav className="border-b  shadow-2xl h-[6rem] flex sticky top-0 bg-white">
				<a href="/">
					<div className="text-2xl p-6 flex justify-start items-start">
						<span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
							DEVELOPER'S
						</span>{" "}
						BLOG
					</div>
				</a>
				<div className="justify-center flex  items-center pl-[18%] ">
					<input
						type="text "
						placeholder="Search"
						className="inline  border-black border focus:outline-4 w-[16em] h-[50%]   rounded-lg"
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
				<div className="flex justify-end items-center w-[100%] pr-[5rem] ">
					<MdBrightness5 />
				</div>
			</nav>
		</>
	)
}
export default Header
