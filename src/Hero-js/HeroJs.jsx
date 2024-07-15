import React from "react"
import img1 from "../assets/img1.png"

import CardComponent from "../CardComponent/CardComponent"

function HeroJs() {
	return (
		<>
			<section>
				<div>
					<div className="border-b-8  border-black w-[80%]   pt-20 ml-[220px] md:ml-[10%]"></div>
					<div
						className="flex justify-center text-[85px]
					md:text-[10rem] font-bold text-center ml-[345px] md:mr-[300px]  "
					>
						THE BLOG
					</div>
					<div className="border-b-8  border-black w-[80%] ml-[220px] md:ml-[10%]"></div>
				</div>
			</section>
			<section className="pt-[8rem] w-[800px] md:w-[auto]">
				<div className="flex justify-around pt-[8rem] bg-[#ffff006b] border">
					<div className="align-middle flex justify-center items-center flex-col space-y-[5rem] md:w-[50%]">
						<p className="text-5xl font-w font-light pl-[2rem]">
							Want to learn Javascript
						</p>{" "}
						<button className=" lg:w-[700px] md:w-[380px] h-[3rem] rounded-2xl bg-[orange] text-white text-2xl  transition ease-in delay-100 hover:-translate-y-2 hover:scale-110 duration-100 ...  w-[300px] ">
							<a href="">learn more</a>
						</button>
					</div>
					<div className="lg:w-[600px] md:w-[359px]">
						<img
							src={img1}
							alt=""
							className="md:w-[317px] lg:w-[768px] md:h-[210px] lg:h-[auto]"
						/>
					</div>
				</div>
			</section>
			<CardComponent />
		</>
	)
}
export default HeroJs
