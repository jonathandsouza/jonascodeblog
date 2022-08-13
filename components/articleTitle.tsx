import { FC } from "react";

export const ArticleTitle: FC<{
	text: string;
	publishedOn: string;
	github?: string;
}> = ({ text, publishedOn, github }) => {
	return (
		<>
			<h1 className="text-4xl font-bold">{text}</h1>
			{github && (
				<div className="pt-2">
					sources:&nbsp;<a href={github}>github</a>
				</div>
			)}
			<div>written on:&nbsp; {publishedOn}</div>
		</>
	);
};

export default ArticleTitle;
