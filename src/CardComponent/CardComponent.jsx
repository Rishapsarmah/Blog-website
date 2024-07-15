import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const CardComponent = () => {
	const [photos, setPhotos] = useState([])

	useEffect(() => {
		fetch("http://localhost:1337/api/blog-posts?populate=*")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data)
				setPhotos(data.data)
			})
	}, [])

	console.log(photos)

	return (
		<div>
			<section className="text-gray-600 body-font pl-[2rem] ">
				<div className="container px-5 py-24 mx-auto md:pr-[4.25rem]">
					<div
						className="md:flex md:flex-wrap md:-m-4 md:w-[auto] md:pl-[2rem] flex flex-wrap -m-4 pl-[0rem]
					w-[45rem] p-[3 rem] "
					>
						{photos.map((photo) => (
							<div
								key={photo.id}
								className="p-4 lg:w-1/3 shadow-2xl md:w-1/2"
							>
								<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
									<img
										className="lg:h-48 md:h-36 w-full object-cover object-center"
										src={`http://localhost:1337${photo.attributes.CoverImage.data.attributes.url}`}
										alt="content"
									/>
									<div className="p-6">
										<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
											{photo.attributes.Slug}
										</h2>
										<h1 className="title-font text-lg font-medium text-gray-900 mb-3">
											{photo.attributes.Title}
										</h1>
										<p className="leading-relaxed mb-3">
											{photo.attributes.Content[0].children[0].text}
										</p>
										<div className="flex items-center flex-wrap">
											<Link
												to={`/blog/${photo.attributes.Slug}`}
												className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
											>
												Learn More
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default CardComponent
