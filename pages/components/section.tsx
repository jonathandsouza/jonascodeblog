import React, { FC } from "react";

export const Section: FC<{ id?: string; children: React.ReactNode }> = ({
	children,
	id,
}) => {
	return (
		<section id={id} className="pt-10">
			{children}
		</section>
	);
};

export default Section;
