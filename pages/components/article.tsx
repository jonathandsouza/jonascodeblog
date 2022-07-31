import { FC } from "react";

export const Article: FC<any> = ({ children }) => {
	return (
		<article>
			<div className="container mb-10 mt-5 ">{children}</div>
		</article>
	);
};

export default Article;
