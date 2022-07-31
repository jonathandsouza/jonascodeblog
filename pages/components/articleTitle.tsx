import { FC } from "react";

export const ArticleTitle: FC<{
	text: string;
	publishedOn: Date;
	github: string;
}> = ({ text, publishedOn, github }) => {
	return (
		<>
			<h1 className="text-4xl font-bold">{text}</h1>
			sources:&nbsp;<a href={github}>github</a>
			<br />
			written on:&nbsp; {publishedOn.toLocaleDateString()}
		</>
	);
};

export default ArticleTitle;
