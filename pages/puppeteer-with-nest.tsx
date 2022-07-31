import Image from "next/image";
import type { NextPage } from "next";
import { Article } from "./components/article";
import ArticleTitle from "./components/articleTitle";
import Section from "./components/section";

const Home: NextPage = () => {
	return (
		<Article>
			<>
				<ArticleTitle
					text="Implementing a pre-render service using Puppeteer & NestJS"
					publishedOn={new Date()}
					github="https://github.com/jonathandsouza/puppeteer-pre-rendering-service"
				/>

				<h2>table of contents</h2>
				<ul>
					<li>What is a Pre-render service?</li>
					<li>Why do you need a Pre-render service?</li>
					<li>
						Tools &amp; libs, we will be using to build the service
					</li>
					<li>Implementation</li>
					<li>Deployment</li>
					<li>Solving Problems using the pre-render service</li>
					<li>Conclusion</li>
				</ul>

				<Section>
					<h2>What is a Pre-render service?</h2>
					<p>
						A pre-render service will take a URL as an input and
						spit out the HTML content of the URL. This is useful for
						SEO purposes, as it will help you to build more
						reachable web application. A pre-render service is
						primarily used for SEO purposes. i.e for the benifit of
						web crawlers.
					</p>
				</Section>

				<Section id="why-you-need-pre-render-service">
					<h2>Why do you need a Pre-render service?</h2>
					<p>
						Say you have a website built in a modern SPA framework
						or library. In these applications, most of the UI
						rendering and data fetching happens on the client side.
						Due to this shortcoming, whenever your page is crawled
						there is good chance that the crawler does not have the
						opportunity to crawl your page accurately. The
						pre-render service described in this article will solve
						this problem for you.
					</p>

					<p>
						At this point, some of you might comment. &quot;Ohh No!
						I use a SSR framework like Next.js or Remix and this
						problem doesn&pos;t apply to my use case&quot;. For
						those please consider the following use cases:
					</p>

					<p>
						<strong>Use case 1:</strong>
						<br />
						The cardinal rule of building performant websites is to{" "}
						<a href="https://web.dev/dom-size/"> load less dom</a>.
						Thinking along this lines. You might be tempted to lazy
						load the footer of your website. This is a sure fire way
						to get a call from the SEO team calling you an idot.
						Thus the dilemma , can you lazy load the footer & not
						suffer from the consequences of this? pre-rendering is
						the solution you are looking for
					</p>

					<p>
						<strong>Use case 2:</strong>
						<br />
						Say you have a tab layout & the contents of each
						individual tab is loaded via an API. How do you make
						sure when web crawlers crawl your website the content of
						the tabs are available for crawling? pre-rendering is
						the solution you are looking for.
					</p>
				</Section>

				<Section>
					<h2>Tools & libs, we will be using to build the service</h2>
					<ul>
						<li>
							<a href="https://github.com/puppeteer/puppeteer">
								Puppeteer
							</a>
						</li>
						<li>
							<a href="https://docs.nestjs.com/">NestJS</a>
						</li>
					</ul>
				</Section>

				<Section>
					<h2>Implementation</h2>

					<p>The sources for this implementation can be found here</p>

					<p>
						<strong>#1 setup nestjs</strong>

						<br />

						<code>
							$ npm i -g @nestjs/cli
							<br />$ nest new pre-render-service
						</code>
					</p>

					<p>
						<strong>#1 setup core packages</strong>

						<br />

						<code>
							$ npm install puppeteer @types/puppeteer
							<br />$ npm install @types/puppeteer -D
						</code>
					</p>

					<p>
						<strong>
							#1 configure app default route &amp; controller (
							<a href="https://github.com/jonathandsouza/puppeteer-pre-rendering-service/blob/main/src/app.controller.ts">
								source
							</a>
							)
						</strong>

						<br />

						<Image
							src="/pre-render-app-controller.jpg"
							height={800}
							width={700}
						></Image>
					</p>

					<p>
						<strong>#5 Test </strong>
						<code>
							$ npm install
							<br />$ npm run start
						</code>
						Once the service is running. Go to the following
						<a href="http://localhost:3030/?url=https://www.google.com">
							link&nbsp;
						</a>
						(http://localhost:3030/?url=https://www.google.com/).
						Observe that the response of the request is static
						content.
					</p>
				</Section>

				<Section>
					<h2>Deployment</h2>
					<p>
						A quick note on deployment. Ensure that your reverse
						proxy is configured to route your requests to the
						pre-render service based on the user agent of the
						incoming request.
					</p>
				</Section>

				<Section>
					<h2>Solving Problems using the pre-render service</h2>
					<p>
						Earlier in this article, we discussed some{" "}
						<a href="#why-you-need-pre-render-service">use cases</a>
						. With the pre-render service in place we are now have
						the necessary tooling to solve these problems.
					</p>

					<p>
						The solution is ridiculously simple. All we need to do
						is the following:
						<ul>
							<li>
								#1 All we need is to identify the request coming
								from pre-render service.We can achieve this by
								adding a query parm to the request coming from
								pre-render.
							</li>
							<li>
								#2 We need to build feature flags in our app
								that will turn off certain features which are
								problematic from an SEO perspective. For example
								lazy loading of the lazy loading the content
								footer or the tab layout.
							</li>
						</ul>
					</p>
				</Section>

				<Section>
					<h2>Conclusion</h2>
					<p>
						With the introduction of SSR &amp; SSG frameworks such
						as NextJS & Remix, I was hoping the need of such
						pre-rendering service would be a thing of the past but
						alas there are still niche scenarios where such an
						service might have some utility.
					</p>
				</Section>
			</>
		</Article>
	);
};

export default Home;
