import { FC } from "react";

export const ArticleTitle: FC<{
	text: string;
	publishedOn: Date;
	github: string;
}> = ({ text, publishedOn, github }) => {
	return (
		<>
			<h1 className="">{text}</h1>
			<p>
				<a href={github}>sources</a>
			</p>
		</>
	);
};

export default ArticleTitle;
