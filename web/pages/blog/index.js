import { Container, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import Link from "next/link";

function BlogList(props) {
	return (
		<>
			<NextSeo title="printIQ blog list" />
			<Container>
				<Typography variant="h5" component="h1">
					Our printIQ Blog List
				</Typography>
				<ul>
					{props.blogs.map((blog, idx) => {
						return (
							<li key={blog.id}>
								<Link href={`/blog/${blog.slug}`}>
									<a target="_blank">{blog.title}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const fs = require("fs");
	const matter = require("gray-matter");
	const { v4: uuid } = require("uuid");
	const files = fs.readdirSync(`${process.cwd()}/_contents`, "utf-8");

	const blogs = files
		.filter((fn) => fn.endsWith(".md"))
		.map((fn) => {
			const path = `${process.cwd()}/_contents/${fn}`;
			const rawContent = fs.readFileSync(path, {
				encoding: "utf-8",
			});
			const { data } = matter(rawContent);

			return { ...data, id: uuid() };
		});
	return {
		props: { blogs },
	};
}

export default BlogList;
