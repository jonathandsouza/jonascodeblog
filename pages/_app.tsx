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
				<meta
					name="google-site-verification"
					content="Wl7qilM3OM9c8pqDwDuqLnpbe7WWm5OZhKoW0TMvJQk"
				/>
			</Head>
			<header>
				<div className="container mx-auto max-w-screen-lg px-3 py-6">
					<div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
						<Link href="/">
							<a>
								<div
									className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent"
									style={{ lineHeight: "3.5rem" }}
								>
									Jona's Blog
								</div>
							</a>
						</Link>
						<nav>
							<ul className="flex gap-x-3 font-medium text-gray-200 text-xl">
								<li className="hover:text-white">
									<a
										href="https://stackoverflow.com/users/3051279/jonathan-dsouza"
										target="_blank"
										rel="noreferrer"
									>
										Stack Overflow
									</a>
								</li>
								<li className="hover:text-white">
									<a
										href="https://github.com/jonathandsouza"
										target="_blank"
										rel="noreferrer"
									>
										GitHub
									</a>
								</li>
								<li className="hover:text-white">
									<a
										href="https://twitter.com/JonathanDsouza3"
										target="_blank"
										rel="noreferrer"
									>
										Twitter
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<main>
				<Component {...pageProps} />
			</main>
			<Script src="https://www.googletagmanager.com/gtm.js?id=GTM-WF222HH" />
		</>
	);
}

export default MyApp;
