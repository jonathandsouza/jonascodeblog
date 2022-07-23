import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>Jona&pos;s code blog</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="google-site-verification"
					content="Wl7qilM3OM9c8pqDwDuqLnpbe7WWm5OZhKoW0TMvJQk"
				/>
			</Head>

			<code>Today I start writing my blog </code>
		</div>
	);
};

export default Home;
