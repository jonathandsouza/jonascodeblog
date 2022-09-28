import Image from "next/image";
import type { NextPage } from "next";
import { Article } from "@components/article";
import ArticleTitle from "@components/articleTitle";
import Section from "@components/section";
import Head from "next/head";
import SectionTitle from "@components/sectionTitle";
import Code from "@components/code";

const Page: NextPage = () => {
	return (
		<>
			<Head>
				<title>
					Implementing a pre-render service using Puppeteer & NestJS
				</title>

				<meta
					name="title"
					content="Implementing a pre-render service using Puppeteer & NestJS"
				/>
				<meta
					name="description"
					content="A node service to pre-render pages or generate HTML content to be served to web crawlers"
				/>
				<meta
					name="keywords"
					content="typescript, seo-optimization, pre-render, puppeteer, nestjs"
				/>
			</Head>

			<Article>
				<>
					<ArticleTitle
						text="Implementing a pre-render service using Puppeteer & NestJS"
						publishedOn={"31-07-2022"}
						github="https://github.com/jonathandsouza/puppeteer-pre-rendering-service"
					/>

					<Section>
						<SectionTitle>Table of contents</SectionTitle>
						<ul className="pl-5 underline">
							<li>
								<a href="#what-is-a-pre-render-service">
									What is a Pre-render service?
								</a>
							</li>
							<li>
								<a href="#why-you-need-pre-render-service">
									Why do you need a Pre-render service?
								</a>
							</li>
							<li>
								<a href="#tools-and-libs">
									Tools &amp; libs, we will be using to build
									the service
								</a>
							</li>
							<li>
								<a href="#implementation">Implementation</a>
							</li>
							<li>
								<a href="#deployment">Deployment</a>
							</li>
							<li>
								<a href="#solving-problems">
									Solving Problems using the pre-render
									service
								</a>
							</li>
							<li>
								<a href="#conclusion">Conclusion</a>
							</li>
						</ul>
					</Section>

					<Section id="what-is-a-pre-render-service">
						<SectionTitle>
							What is a Pre-render service?
						</SectionTitle>
						<p>
							A pre-render service will take a URL as an input and
							spit out the HTML content of the URL. This is useful
							for SEO purposes, as it will help you to build more
							reachable web application.
						</p>
					</Section>

					<Section id="why-you-need-pre-render-service">
						<SectionTitle>
							Why do you need a Pre-render service?
						</SectionTitle>
						<p>
							Say you have a website built in a modern SPA
							framework or library. In such applications, most of
							the UI rendering and data fetching happens on the
							client side. Due to this shortcoming, whenever your
							page is crawled there is good chance that the
							crawler does not have the opportunity to crawl your
							page accurately. The pre-render service described in
							this article will solve this problem for you.
						</p>
						<br />
						<p>
							At this point, some of you might comment. &quot;Ohh
							No! I use a SSR framework like Next.js or Remix and
							this problem doesn&apos;t apply to my use
							case&quot;. For those, please consider the following
							use cases:
						</p>

						<p className="pt-5">
							<strong>Use case 1:</strong>
							<br />
							The cardinal rule of building performant websites is
							to{" "}
							<a
								className="underline"
								href="https://web.dev/dom-size/"
							>
								{" "}
								load less dom
							</a>
							. Thinking along this lines. You might be tempted to
							lazy load the footer of your website. This is a sure
							fire way to get a call from the SEO team calling you
							an idot. Thus the dilemma , can you lazy load the
							footer & not suffer from the consequences of this?
							pre-rendering is the solution you are looking for.
						</p>

						<p className="pt-5">
							<strong>Use case 2:</strong>
							<br />
							Say you have a tab layout & the contents of each
							individual tab is loaded via an API. How do you make
							sure when web crawlers crawl your website the
							content of the tabs are available for crawling?
							pre-rendering is the solution you are looking for.
						</p>
					</Section>

					<Section id="tools-and-libs">
						<SectionTitle>
							Tools & libs, we will be using to build the service
						</SectionTitle>
						<ul>
							<li>
								<a
									className="underline"
									href="https://github.com/puppeteer/puppeteer"
								>
									Puppeteer
								</a>
							</li>
							<li>
								<a
									className="underline"
									href="https://docs.nestjs.com/"
								>
									NestJS
								</a>
							</li>
						</ul>
					</Section>

					<Section id="implementation">
						<SectionTitle>Implementation</SectionTitle>

						<p>
							The sources for this implementation can be found
							&nbsp;
							<a
								className="underline"
								href="https://github.com/jonathandsouza/puppeteer-pre-rendering-service"
							>
								here
							</a>
						</p>

						<p className="pt-5">
							<strong>1. setup nestjs</strong>

							<br />

							<Code>
								$ npm i -g @nestjs/cli
								<br />$ nest new pre-render-service
							</Code>
						</p>

						<p>
							<strong>2. setup core packages</strong>

							<br />

							<Code>
								$ npm install puppeteer @types/puppeteer
								<br />$ npm install @types/puppeteer -D
							</Code>
						</p>

						<p>
							<strong className="pb-5">
								3. configure app default route &amp; controller
								(
								<a
									className="underline"
									href="https://github.com/jonathandsouza/puppeteer-pre-rendering-service/blob/main/src/app.controller.ts"
								>
									source
								</a>
								)
							</strong>

							<br />
							<br />

							<Image
								src="/pre-render-app-controller-2.png"
								height={800}
								width={700}
								alt="app controller"
							></Image>
						</p>

						<p className="pt-5">
							<strong>4. Test </strong>
							<Code>
								$ npm install
								<br />$ npm run start
							</Code>
							Once the service is running. Go to the
							following&nbsp;
							<a
								className="underline"
								href="http://localhost:3030/?url=https://www.google.com"
							>
								link&nbsp;
							</a>
							(http://localhost:3030/?url=https://www.google.com/).
							Observe that the response of the request is static
							content.
						</p>
					</Section>

					<Section id="deployment">
						<SectionTitle>Deployment</SectionTitle>
						<p>
							A quick note on deployment. Ensure that your reverse
							proxy is configured to route your requests to the
							pre-render service based on the user agent of the
							incoming request.
						</p>
					</Section>

					<Section id="solving-problems">
						<SectionTitle>
							Solving Problems using the pre-render service
						</SectionTitle>
						<p>
							Earlier in this article, we discussed some{" "}
							<a
								className="underline"
								href="#why-you-need-pre-render-service"
							>
								use cases
							</a>
							. With the pre-render service in place we are now
							have the necessary tooling to solve these problems.
						</p>

						<p>
							The solution is ridiculously simple. All we need to
							do is the following:
							<ul className="pl-5 pt-3">
								<li>
									#1 All we need is to identify the request
									coming from pre-render service.We can
									achieve this by adding a query parm to the
									request coming from pre-render.
								</li>
								<li className="pt-1">
									#2 We need to build feature flags in our app
									that will turn off certain features which
									are problematic from an SEO perspective. For
									example lazy loading of the lazy loading the
									content footer or the tab layout.
								</li>
							</ul>
						</p>
					</Section>

					<Section id="conclusion">
						<SectionTitle>Conclusion</SectionTitle>
						<p>
							With the introduction of SSR &amp; SSG frameworks
							such as NextJS & Remix, I was hoping the need of
							such pre-rendering service would be a thing of the
							past but alas there are still niche scenarios where
							such an service might have some utility.
						</p>
					</Section>
				</>
			</Article>
		</>
	);
};

export default Page;
