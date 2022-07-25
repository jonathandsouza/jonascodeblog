import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="container">
			<h1 className="text-3xl font-bold pt-10 text-blue-700">Posts</h1>
			<h2 className="text-2xl text-blue-500 pt-5">
				<Link href={"/puppeteer-with-nest"}>
					<a>
						1. Implementation for a Prerender service using
						Puppeteer + NestJS
					</a>
				</Link>
			</h2>
		</div>
	);
};

export default Home;
