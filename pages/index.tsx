import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="container">
			<h2 className="text-2xl pt-5">
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
