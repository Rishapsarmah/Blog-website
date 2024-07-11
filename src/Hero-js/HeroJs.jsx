import React from "react"
import img1 from "../assets/img1.png"

import CardComponent from "../CardComponent/CardComponent"

function HeroJs() {
	return (
		<>
			<section>
				<div>
					<div className="border-b-8  border-black w-[80%]  ml-[10%] pt-20"></div>
					<div className="flex justify-center text-[10rem] font-bold">
						THE BLOG
					</div>
					<div className="border-b-8  border-black w-[80%]  ml-[10%]"></div>
				</div>
			</section>
			<section className="pt-[8rem]">
				<div className="flex justify-around pt-[8rem] bg-[#ffff006b] border">
					<div className="align-middle flex justify-center items-center flex-col space-y-[5rem]">
						<p className="text-4xl font-w font-light">
							Want to learn Javascript
						</p>{" "}
						<button className="w-[700px] h-[3rem] rounded-2xl bg-[orange] text-white text-2xl  transition ease-in delay-100 hover:-translate-y-2 hover:scale-110 duration-100 ...">
							<a href="">learn more</a>
						</button>
					</div>
					<div className="w-[600px]">
						<img src={img1} alt="" />
					</div>
				</div>
			</section>
			<CardComponent />
		</>
	)
}
export default HeroJs
