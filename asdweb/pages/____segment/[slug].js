// file: pages/segment/[slug].js
import { Container, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Alert, AlertTitle } from "@material-ui/lab";

const styleObject = {
	h3: {
		color: "green",
	},
};

function SegmentPagePost(props) {
	return (
		<>
			<NextSeo
				title={props.segment.title}
				description={props.segment.SeoDesc}
			/>
			<Container>
				<Typography variant="h4" component="h1">
					{props.segment.title}
				</Typography>
				<Box
					dangerouslySetInnerHTML={{ __html: props.segment.content }}
					style={styleObject}
				></Box>
				<style jsx>{`
					h3: {
						color: green;
					}
				`}</style>
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
// pass props to SegmentPagePost component
export async function getStaticProps(context) {
	const fs = require("fs");
	const html = require("remark-html");
	const highlight = require("remark-highlight.js");
	const unified = require("unified");
	const markdown = require("remark-parse");
	const matter = require("gray-matter");

	const slug = context.params.slug; // get slug from params
	const path = `${process.cwd()}/_segments/${slug}.md`;

	// Read file content and store into raw content variable
	const rawContent = fs.readFileSync(path, {
		encoding: "utf-8",
	});

	const { data, content } = matter(rawContent);
	// pass rawContent to gray-matter to get data and content

	const result = await unified()
		.use(markdown)
		.use(highlight)
		.use(html)
		.process(content);

	return {
		props: {
			segment: {
				...data,
				content: result.toString(),
			},
		},
	};
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
	const fs = require("fs");

	const path = `${process.cwd()}/_segments`;
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

export default SegmentPagePost;
