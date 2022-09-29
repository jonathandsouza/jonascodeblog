import Head from "next/head";

import type { NextPage } from "next";
import { Article } from "@components/article";
import ArticleTitle from "@components/articleTitle";
import Section from "@components/section";
import SectionTitle from "@components/sectionTitle";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Manual or Self built AB testing solution</title>

				<meta
					name="title"
					content="Manual or Self built AB testing solution"
				/>
				<meta
					name="description"
					content="How to do AB testing manually using Google Analytics."
				/>
				<meta
					name="keywords"
					content="AB testing, self built AB testing, manual AB testing, AB testing using GA"
				/>
			</Head>

			<Article>
				<>
					<ArticleTitle
						text="Manual or Self built AB testing solution"
						publishedOn={"05-08-2022"}
					/>

					<Section id="table-of-contents">
						<SectionTitle>Table of contents</SectionTitle>
						<ul className="pl-5 underline">
							<li>
								<a className="underline" href="#introduction">
									Introduction
								</a>
							</li>
							<li>
								<a
									className="underline"
									href="#splitting-strategy"
								>
									Splitting strategy
								</a>
							</li>
							<li>
								<a
									className="underline"
									href="#storing-test-version"
								>
									Storing experiment & variant information
									into the client
								</a>
							</li>
							<li>
								<a
									className="underline"
									href="#the-problem-wth-tab-layout"
								>
									Passing experiment & variant information to
									Google Analytics
								</a>
							</li>
							<li>
								<a
									className="underline"
									href="#the-problem-wth-lazy-loading"
								>
									Configuring Google Analytics
								</a>
							</li>
						</ul>
					</Section>

					<Section id="introduction">
						<SectionTitle>Introduction</SectionTitle>
						<p></p>
					</Section>

					<Section id="preloading-and-lazy-loading-images-for-better-seo">
						<SectionTitle>
							Preloading images for better SEO
						</SectionTitle>

						<p>
							Google has a finite crawl budget. If you want
							certain images on your website to be highlighted and
							associated with your website. You should ensure they
							are loaded earlier in the lifecycle. You can achieve
							this by{" "}
							<a
								className="underline"
								href="https://web.dev/preload-responsive-images/"
							>
								preloading
							</a>{" "}
							the important images.
						</p>
					</Section>

					<Section id="pre-connect-to-externals">
						<SectionTitle>Pre-connect to externals</SectionTitle>
						<p>
							If you are downloading assets from external domains
							it might be a good idea to{" "}
							<a
								className="underline"
								href="https://web.dev/preconnect-and-dns-prefetch/"
							>
								pre-connect to the external domains.
							</a>
						</p>
					</Section>

					<Section id="the-problem-wth-tab-layout">
						<SectionTitle>
							The Problem with Tab layout & proposed solution.
						</SectionTitle>
						<p>
							Avoid using tabbed layouts in your website. Often
							important contents on your website are hidden behind
							a tab. The golden rule of good SEO is to have good
							content. Hiding you content behind a tab is not the
							best idea. If you you have already built a complex
							website using tabbed layout. This guide{" "}
							<a
								className="underline"
								href="https://jonascodeblog.vercel.app/puppeteer-with-nest"
							>
								here
							</a>{" "}
							might save you a complex re-write.
						</p>
					</Section>

					<Section id="the-problem-wth-lazy-loading">
						<SectionTitle>
							The Problem with Lazy loaded content & proposed
							solution.
						</SectionTitle>

						<p>
							One of the subtlest foot guns I have encountered
							during front-end development is lazy loading content
							on scroll.
						</p>
						<p>
							Even though loading content which are off screen are
							essential for good performance, doing this will
							through off the SEO of your website. The only way to
							have the best of both worlds is to{" "}
							<a
								className="underline"
								href="https://jonascodeblog.vercel.app/puppeteer-with-nest"
							>
								{" "}
								pre-render the content served to crawlers{" "}
							</a>
						</p>
					</Section>
				</>
			</Article>
		</>
	);
};

export default Home;
