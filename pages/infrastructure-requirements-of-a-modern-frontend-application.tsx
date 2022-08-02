import Image from "next/image";
import type { NextPage } from "next";
import { Article } from "./components/article";
import ArticleTitle from "./components/articleTitle";
import Section from "./components/section";
import Head from "next/head";
import SectionTitle from "./components/sectionTitle";
import Code from "./components/code";
import SubSectionTitle from "./components/subSectionTitle";
import SubSection from "./components/subSection";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>
					Infrastructure requirements of a modern frontend application
				</title>

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
						publishedOn={"01-08-2022"}
					/>

					<Section id="table-of-contents">
						<SectionTitle>Table of contents</SectionTitle>
						<ul className="pl-5">
							<li>
								<a href="#deployment">Deployment</a>
								<ul className="pl-5">
									<li>
										<a href="#deployment-without-downtime">
											Deployment without downtime
										</a>
									</li>
									<li>
										<a href="#deployment-without-disruption">
											Deployment without disruption
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#why-you-need-pre-render-service">
									Performance
								</a>
								<ul className="pl-5">
									<li>Time to first Byte (TBT)</li>
									<li>Images</li>
								</ul>
							</li>
							<li>
								<a href="#tools-and-libs">Security</a>
								<ul>
									<li>DDOS Protection</li>
								</ul>
							</li>
							<li>
								<a href="#implementation">Monitoring</a>
								<ul className="pl-5">
									<li>Performance monitoring</li>
									<li>Error monitoring</li>
								</ul>
							</li>
							<li>
								<a href="#deployment">Mics. Good to have</a>
							</li>
							<ul>
								<li>
									<a href="#solving-problems">AB testing</a>
								</li>
								<li>
									<a href="#conclusion">Edge functions </a>
								</li>
							</ul>
						</ul>
					</Section>

					<Section id="deployment">
						<SectionTitle>Deployment</SectionTitle>

						<SubSection>
							<SubSectionTitle id="deployment-without-downtime">
								Deployment without downtime
							</SubSectionTitle>

							<p>
								In gods year 2022, you should be able to deploy
								your front-end at any time a feature is ready to
								ship. If you are in a situation where you are
								unable to ship a feature for fear of causing an
								outage of your front-end, then you have a
								fundamental problem with you deployment stack &
								need to re-evaluate the decision that brought
								you hear. Sorry fam tough love time.
							</p>
						</SubSection>

						<SubSection>
							<SubSectionTitle id="deployment-without-disruption">
								Deployment without disruption
							</SubSectionTitle>

							<p>
								This requirement from your deployment stack may
								be a little subtle. Say you have a user in the
								checkout page and at the very moment your
								customer is doing a booking you in your infinite
								wisdom decided to deploy a feature. In a ideal
								situation the customer should be able to
								complete their purchase without any disruption.
							</p>
						</SubSection>
					</Section>

					<Section id="what-is-a-pre-render-service">
						<SectionTitle>Deployment</SectionTitle>

						<SubSection id="time-to-first-byte">
							<SubSectionTitle>
								Time to first Byte (
								<a href="https://web.dev/ttfb/">TBT</a>)
							</SubSectionTitle>

							<p>
								This is what we call in the business an easy
								win. Of all the{" "}
								<a href="https://web.dev/learn-web-vitals/">
									Core web vitals
								</a>{" "}
								to optimize for this has to be in my opinion the
								easiest. Just get a CDN or requisition a
								front-end cloud infrastructure like{" "}
								<a href="https://vercel.com/">Vercel</a>.
							</p>
						</SubSection>

						<SubSection>
							<SubSectionTitle>Images</SubSectionTitle>

							<p>
								This requirement from your deployment stack may
								be a little subtle. Say you have a user in the
								checkout page and at the very moment your
								customer is doing a booking you in your infinite
								wisdom decided to deploy a feature. In a ideal
								situation the customer should be able to
								complete their purchase without any disruption.
							</p>
						</SubSection>
					</Section>
				</>
			</Article>
		</>
	);
};

export default Home;
