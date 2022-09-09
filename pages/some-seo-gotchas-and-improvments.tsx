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
				<title>Some SEO gotchas &amp; Improvements</title>

				<meta
					name="title"
					content="Infrastructure requirements of a modern frontend application"
				/>
				<meta
					name="description"
					content="List of infrastructure requirements of a modern frontend application"
				/>
				<meta
					name="keywords"
					content="frontend, infrastructure, requirements, modern"
				/>
			</Head>

			<Article>
				<>
					<ArticleTitle
						text="Infrastructure requirements of a modern frontend application"
						publishedOn={"05-08-2022"}
					/>

					<Section id="table-of-contents">
						<SectionTitle>Table of contents</SectionTitle>
						<ul className="pl-5  underline">
							<li>
								<a href="#introduction">Introduction</a>
							</li>
							<li>
								<a href="#introduction">
									Preloading & lazy loading images
								</a>
							</li>
							<li>
								<a href="#a-better-approach">
									Pre-connect to externals
								</a>
							</li>
							<li>
								<a href="#a-better-approach">
									The Problem with Tab layout & proposed
									solution.
								</a>
							</li>
							<li>
								<a href="#a-better-approach">
									The Problem with Lazy loaded content &
									proposed solution.
								</a>
							</li>
						</ul>
					</Section>

					<Section id="introduction">
						<SectionTitle>Introduction</SectionTitle>
						<p>
							In this article I will highlight some of the SEO
							gotchas & suggestions that was raised when my
							company worked with an external SEO specialist to
							optimize our site SEOs & react.
						</p>
					</Section>

					<Section id="a-better-approach">
						<SectionTitle>A better solution</SectionTitle>

						<p>
							<a href="https://tailwindcss.com/">Tailwind CSS</a>
							is in my opinion a very clean & efficient way to
							write CSS. By building complex UI using utility
							classes it ensures that your CSS bundle is very
							efficient only containing the styles you really
							need. Additionally during build time the un-used
							utilities are purged from your bundle.
						</p>
					</Section>
				</>
			</Article>
		</>
	);
};

export default Home;
