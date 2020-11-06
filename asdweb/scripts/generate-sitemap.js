const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");

(async () => {
	const prettierConfig = await prettier.resolveConfig("../../../prettierrc");

	// Ignore Next.js specific files (e.g., _app.js) and API routes.
	const pages = await globby([
		"pages/**/*{.js,.mdx,md}",
		"!pages/_*.js",
		"!pages/api",
	]);
	const blogPost = await globby(["_contents/**/*{.js,.mdx,.md}"]);
	const segments = await globby("_segments/**/*{.js,.mdx,.md}");

	//Combine all of them
	const allPages = [...pages, ...blogPost, ...segments];

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${allPages
							.map((page) => {
								const path = page
									.replace("pages", "")
									.replace("_contents", "/blog")
									.replace("_segments", "/segment")
									.replace("[slug]", "")
									.replace(".js", "")
									.replace(".mdx", "")
									.replace(".md", "");
								const route = path === "/index" ? "" : path;

								return `
                        <url>
                            <loc>${`https://printiq.com${route}`}</loc>
                        </url>
                    `;
							})
							.join("")}
        </urlset>
  `;
	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: "html",
	});
	fs.writeFileSync("public/sitemap.xml", formatted);
})();
