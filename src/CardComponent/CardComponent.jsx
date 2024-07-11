import { useState, useEffect } from "react"

const CardComponent = () => {
	const [photos, setPhotos] = useState([])
	useEffect(() => {
		fetch("http://localhost:1337/api/blog-posts?populate=*")
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				console.log(data.data)
				setPhotos(data.data)
			})
	}, [])
	console.log(photos)
	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						{photos.map((photo) => (
							<div key={photo.id} className="p-4 md:w-1/3 shadow-2xl">
								<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
									<img
										className="lg:h-48 md:h-36 w-full object-cover object-center"
										src={
											"http://localhost:1337${photo.attributes.CoverImage.data.attributes.url}"
										}
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
										<div className="flex items-center flex-wrap ">
											<a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
												Learn More
											</a>
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
