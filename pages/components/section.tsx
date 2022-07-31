import React, { FC } from "react";

export const Section: FC<{ id?: string; children: React.ReactNode }> = ({
	children,
	id,
}) => {
	return <section id={id}>{children}</section>;
};

export default Section;
