import React, { FC } from "react";

export const subSectionTitle: FC<{
	id?: string;
	children: React.ReactNode;
}> = ({ children, id = "" }) => {
	return (
		<h3 className="text-xl font-bold mb-1" id={id}>
			{children}
		</h3>
	);
};

export default subSectionTitle;
