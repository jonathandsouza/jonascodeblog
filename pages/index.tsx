import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="container">
			<h2 className="text-xl pt-5">
				<Link href={"/puppeteer-with-nest"}>
					<a className="text-xl">
						1. Implementation for a Prerender service using
						Puppeteer + NestJS
					</a>
				</Link>
			</h2>

			<h2 className="text-xl pt-5">
				<Link
					href={
						"/infrastructure-requirements-of-a-modern-frontend-application"
					}
				>
					<a className="text-xl">
						2. Infrastructure requirements of a modern frontend
						application
					</a>
				</Link>
			</h2>

			<h2 className="text-xl pt-5">
				<Link href={"/css-in-js-is-not-the-best-solution"}>
					<a className="text-xl">
						3. CSS in JS is not the best solution
					</a>
				</Link>
			</h2>

			<h2 className="text-xl pt-5">
				<Link href={"/some-seo-gotchas-and-improvements"}>
					<a className="text-xl">
						4. Some SEO gotchas and improvements
					</a>
				</Link>
			</h2>
		</div>
	);
};

export default Home;
