// file: pages/blog/[slug].js
import { Container, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Alert, AlertTitle } from "@material-ui/lab";

const styles = makeStyles((theme) => ({
	box: {
		margin: "15px auto",
		textAlign: "center",
	},
}));

function BlogPostPage(props) {
	const classes = styles();
	return (
		<>
			<NextSeo title={props.blog.title} description={props.blog.SeoDesc} />
			<Container>
				<h1>{props.blog.title}</h1>
				<section
					dangerouslySetInnerHTML={{ __html: props.blog.content }}
				></section>
				<p>{props.blog.date}</p>
				<Alert severity="success">
					Why not make the software you already have more powerful? –{" "}
					<Link href="/book-a-demo">
						<a target="_blank">
							<i>Let’s talk!</i>
						</a>
					</Link>
				</Alert>
			</Container>
		</>
	);
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
	const fs = require("fs");
	const html = require("remark-html");
	const highlight = require("remark-highlight.js");
	const unified = require("unified");
	const markdown = require("remark-parse");
	const matter = require("gray-matter");

	const slug = context.params.slug; // get slug from params
	const path = `${process.cwd()}/contents/${slug}.md`;

	// read file content and store into rawContent variable
	const rawContent = fs.readFileSync(path, {
		encoding: "utf-8",
	});

	const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

	const result = await unified()
		.use(markdown)
		.use(highlight) // highlight code block
		.use(html)
		.process(content); // pass content to process

	return {
		props: {
			blog: {
				...data,
				content: result.toString(),
			},
		},
	};
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
	const fs = require("fs");

	const path = `${process.cwd()}/contents`;
	const files = fs.readdirSync(path, "utf-8");

	const markdownFileNames = files
		.filter((fn) => fn.endsWith(".md"))
		.map((fn) => fn.replace(".md", ""));

	return {
		paths: markdownFileNames.map((fileName) => {
			return {
				params: {
					slug: fileName,
				},
			};
		}),
		fallback: false,
	};
}

export default BlogPostPage;
