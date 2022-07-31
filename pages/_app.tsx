import Head from "next/head";
import Script from "next/script";
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
				<nav className="container flex justify-end py-5">
					<a className="text-2xl font-bold">Posts</a>
				</nav>
			</header>
			<Component {...pageProps} />
			<Script src="https://www.googletagmanager.com/gtm.js?id=GTM-WF222HH" />
		</>
	);
}

export default MyApp;
