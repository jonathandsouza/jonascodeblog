import React, { FC } from "react";

export const Code: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<code>
			<div className="m-5 bg-slate-700 p-5 ">{children}</div>
		</code>
	);
};

export default Code;
