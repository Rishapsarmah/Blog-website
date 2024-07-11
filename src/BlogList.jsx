import { Link } from "react-router-dom"

function BlogList() {
	const blogPage = [
		{ title: "Blog with Next.js and strapi", slug: "blog-with-next-js" },
		{ title: "Introduction to Angular", slug: "introduction-to-angular" },
		{ title: "Introduction to CRUD", slug: "introduction-to-crud" },
		{ title: "Introduction to Flowbite", slug: "introduction-to-flowbite" },
		{ title: "Introduction to JAVASCRIPT", slug: "introduction-to-javascript" },
		{ title: "Introduction to MERN", slug: "introduction-to-mern" },
		// Add more blog posts here
	]

	return (
		<div>
			{blogPage.map((post) => (
				<div key={post.slug}>
					<Link to={`/blog/${post.slug}`}>{post.title}</Link>
				</div>
			))}
		</div>
	)
}

export default BlogList
