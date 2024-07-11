import React from "react"

function Footer() {
	return (
		<footer
			container
			className="border border-t-8 border-teal-500 mt-[8rem] flex h-[18rem]"
		>
			<div className="w-full max-w-5xl mx-auto">
				<div className="grid w-full justify-between sm:flex md:grid-cols-1">
					<div className="mt-[6rem]">
						<a
							href="/"
							className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white ml-4"
						>
							<span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
								Developer's
							</span>
							<span className="text-black"> Blog</span>
						</a>
					</div>
				</div>
			</div>
			<div className="flex mt-[4rem] pr-8  gap-6">
				<div className="grid">
					<div>
						<a href="">ABOUT</a>
					</div>
					<span>
						<a href="">myportfolio</a>
					</span>
					<span>
						<a href="">myportfolio</a>
					</span>
				</div>
				<div className="grid">
					<div>
						<a href="">ABOUT</a>
					</div>
					<span>
						<a href="">myportfolio</a>
					</span>
					<span>
						<a href="">myportfolio</a>
					</span>
				</div>
				<div className="grid">
					<div>
						<a href="">ABOUT</a>
					</div>
					<span>
						<a href="">myportfolio</a>
					</span>
					<span>
						<a href="">myportfolio</a>
					</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
