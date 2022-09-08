import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Jonas code blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<nav className="container flex justify-end py-5 ">
					<Link href="/">
						<a className="text-2xl font-bold">Posts</a>
					</Link>
				</nav>
			</header>
			<main className="bg-slate-900 text-gray-100">
				<Component {...pageProps} />
			</main>
			<Script src="https://www.googletagmanager.com/gtm.js?id=GTM-WF222HH" />
		</>
	);
}

export default MyApp;
