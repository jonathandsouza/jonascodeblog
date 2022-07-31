import { FC } from "react";

export const Article: FC<any> = ({ children }) => {
	return (
		<article>
			<div className="container">{children}</div>
		</article>
	);
};

export default Article;
