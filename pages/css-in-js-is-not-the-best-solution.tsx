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
				<title>CSS in JS is not the best solution</title>

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
								<a href="#deployment">
									CSS in JS is not the best solution
								</a>
							</li>
							<li>
								<a href="#rant">Rant</a>
							</li>
							<li>
								<a href="#a-better-approach">
									A better approach
								</a>
							</li>
						</ul>
					</Section>

					<Section id="rant">
						<SectionTitle>Rant</SectionTitle>

						<p>
							Without giving my age, I have worked in front-end a
							long time and every now and then a solution pops ups
							which is supposed to replace CSS permanently. There
							is a grave yard of such solutions. CSS in JS
							solutions are new iteration of this trend.
						</p>

						<p className="pt-5">
							CSS has been around for over two decades and the
							industry has a deep understanding of the limitations
							of CSS. Additionally, what CSS is not capable of
							doing are solved by solutions such as pre-processors
							( <a href="https://sass-lang.com/">SCSS</a> &{" "}
							<a href="https://lesscss.org/"> LESS </a>)) and post
							processors such as{" "}
							<a href="https://postcss.org/"> PostCSS </a>
						</p>

						<p className="pt-5">
							My biggest problem with CSS in JS solutions is that
							it adds javascript over head to your bundle. We may
							argue what is overhead actually is but we can both
							agree that this overhead is a non zero number.
						</p>

						<p className="pt-5">
							In a time when google nudges you to reduce your
							javascript footprint (
							<a href="https://web.dev/ttfb/">TTFB</a>) and
							simultaneously we are seeing a re-immergence of
							server side rendering solutions. CSS in JS solutions
							are completely miss placed.
						</p>
					</Section>

					<Section id="a-better-approach">
						<SectionTitle>A better solution</SectionTitle>

						<p>
							<a href="https://tailwindcss.com/">Tailwind CSS</a>{" "}
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
