import React, { FC } from "react";

export const Code: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<code>
			<div className="m-5 bg-gray-100 p-5 ">{children}</div>
		</code>
	);
};

export default Code;
