import Head from "next/head";

import type { NextPage } from "next";
import { Article } from "@components/article";
import ArticleTitle from "@components/articleTitle";
import Section from "@components/section";
import SectionTitle from "@components/sectionTitle";
import SubSectionTitle from "@components/subSectionTitle";
import SubSection from "@components/subSection";

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
						<ul className="pl-5  underline">
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
								<a href="#performance">Performance</a>
								<ul className="pl-5">
									<li>
										<a href="#time-to-first-byte">
											Time to first Byte (TBT)
										</a>
									</li>
									<li>
										<a href="#images">Images</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#security">Security</a>
								<ul>
									<li>
										<a href="#ddos-protection">
											DDOS Protection
										</a>
									</li>
									<li>
										<a href="#ssl-and-https">SSL & HTTPS</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#monitoring">Monitoring</a>
								<ul className="pl-5">
									<li>
										<a href="#performance-monitoring">
											Performance monitoring
										</a>
									</li>
									<li>
										<a href="#error-monitoring">
											Error monitoring{" "}
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#conclusion">Conclusion</a>
							</li>
						</ul>
					</Section>

					<Section id="deployment">
						<SectionTitle>Deployment</SectionTitle>

						<SubSection id="deployment-without-downtime">
							<SubSectionTitle>
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
								you to this point. Sorry fam tough love time.
							</p>
						</SubSection>

						<SubSection id="deployment-without-disruption">
							<SubSectionTitle>
								Deployment without disruption
							</SubSectionTitle>

							<p>
								This requirement from your deployment stack may
								be a little subtle. Say you have a user in the
								checkout page and at the very moment your
								customer is doing a booking you in your infinite
								wisdom decided to deploy a feature. The customer
								should be able to complete their purchase
								without any disruption. Your infrastructure
								should account for this scenario.
							</p>
						</SubSection>
					</Section>

					<Section id="performance">
						<SectionTitle>Performance</SectionTitle>

						<SubSection id="time-to-first-byte">
							<SubSectionTitle>
								Time to first Byte (
								<a
									className="underline"
									href="https://web.dev/ttfb/"
								>
									TTFB
								</a>
								)
							</SubSectionTitle>

							<p>
								This is what we call in the business an easy
								win. Of all the{" "}
								<a
									className="underline"
									href="https://web.dev/learn-web-vitals/"
								>
									Core web vitals
								</a>{" "}
								to optimize for this has to be in my opinion the
								easiest. Just get a CDN or requisition a
								front-end cloud infrastructure like{" "}
								<a
									className="underline"
									href="https://vercel.com/"
								>
									Vercel
								</a>
								.
							</p>
						</SubSection>

						<SubSection id="images">
							<SubSectionTitle>Images</SubSectionTitle>

							<p>
								If you have worked in front-end development. You
								already know that a large chunk of your
								bandwidth is dominated by images. Additionally
								having your images load quickly is important
								from a performance point of view. especially for
								the{" "}
								<a
									className="underline"
									href="https://web.dev/cls/"
								>
									LCP web vital
								</a>
								. Hence having your front-end infrastructure
								deliver optimized images is a must.
							</p>
						</SubSection>
					</Section>

					<Section id="security">
						<SectionTitle>Security</SectionTitle>
						<SubSection id="ddos-protection">
							<SubSectionTitle>DDOS Protection</SubSectionTitle>

							<p>
								If you run a ecommerce websites its absolutely
								paramount to have some sort of security or
								defense against DDoS attacks.
							</p>
						</SubSection>
						<SubSection id="ssl-and-https">
							<SubSectionTitle>SSL & HTTPS</SubSectionTitle>

							<p>
								If you want your customers to consider your
								website seriously & with confidence, Serving
								your content through SSL & HTTPS is necessary.
							</p>
						</SubSection>
					</Section>

					<Section id="monitoring">
						<SectionTitle>Monitoring</SectionTitle>

						<p>
							Alas! once you have taken care of all the points
							mentioned before, You now have a performant
							production grade website. The points mentioned next
							will help you make sure your website continue to run
							properly.
						</p>

						<SubSection id="performance-monitoring">
							<SubSectionTitle>
								Performance monitoring
							</SubSectionTitle>

							<p>
								As mentioned earlier, the web vitals of your
								website play a critical role in how your page is
								ranked by google. Hence keeping an eye on your
								web vitals is essential. Identifying which are
								the pages performing poorly in a real time
								setting with actual traffic will give you the
								insight necessary to optimizing your web app.
							</p>
						</SubSection>
						<SubSection id="error-monitoring">
							<SubSectionTitle>Error Monitoring</SubSectionTitle>

							<p>
								No matter how good your QA team is. There is
								always a possibility that there is a failing
								edge case. Error monitoring will allow you to
								catch the problem in real time and not after the
								fact.
							</p>
						</SubSection>
					</Section>

					<Section id="conclusion">
						<SectionTitle>Conclusion</SectionTitle>
						<p>
							The Goal of this article was to try to consolidate
							various infrastructure needs for any modern
							front-end application and is no way an exhaustive
							list. This is a good starter to point you in the
							right direction. Hope you found this article
							helpful.
						</p>
					</Section>
				</>
			</Article>
		</>
	);
};

export default Home;
