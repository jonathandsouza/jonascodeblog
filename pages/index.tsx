import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Jona&pos;s code blog</title>

				<meta name="title" content="Jonas code blog" />
				<meta
					name="description"
					content="A blog dedicated and curated to address challenges faced by senior level developers"
				/>
				<meta
					name="keywords"
					content="blog, technology, senior content"
				/>
			</Head>

			<div className="container">
				<h2 className="text-2xl pt-5">
					<Link href={"/puppeteer-with-nest"}>
						<a className="text-2xl">
							1. Implementation for a Prerender service using
							Puppeteer + NestJS
						</a>
					</Link>
				</h2>
				<h2 className="text-2xl pt-5">
					<Link
						href={
							"/infrastructure-requirements-of-a-modern-frontend-application"
						}
					>
						<a className="text-2xl">
							2. Infrastructure requirements of a modern frontend
							application
						</a>
					</Link>
				</h2>
				<h2 className="text-2xl pt-5">
					<Link href={"/css-in-js-is-not-the-best-solution"}>
						<a className="text-2xl">
							3. CSS in JS is not the best solution
						</a>
					</Link>
				</h2>

				<h2 className="text-2xl pt-5">
					<Link href={"/some-seo-gotchas-and-improvements"}>
						<a className="text-2xl">
							4. Some SEO gotchas &amp; Improvements
						</a>
					</Link>
				</h2>
			</div>
		</>
	);
};

export default Home;
