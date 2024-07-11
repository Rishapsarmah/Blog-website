import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const BlogPage = () => {
	const { slug } = useParams() // Get the slug from the URL
	const [post, setPost] = useState(null)

	useEffect(() => {
		fetch(
			`http://localhost:1337/api/blog-posts?filters[Slug][$eq]=${slug}&populate=*`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data)
				if (data.data.length > 0) {
					setPost(data.data[0]) // Assuming you get an array, take the first element
				}
			})
			.catch((error) => {
				console.error("Error fetching data:", error)
				// Handle the error here (e.g., display an error message to the user)
			})
	}, [slug])

	if (!post) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto flex flex-wrap">
					<h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
						{post.attributes.Title}
					</h2>
					<div className="md:w-3/5 md:pl-6">
						<p className="leading-relaxed text-base">
							{post.attributes.ContentXl}
						</p>
						<div className="flex md:mt-4 mt-6">
							<button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
								Button
							</button>
							<a className="text-indigo-500 inline-flex items-center ml-4">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default BlogPage
