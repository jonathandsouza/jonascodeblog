import { FC } from "react";

export const subSectionTitle: FC<any> = ({ children }) => {
	return <h3 className="text-xl font-bold mb-1">{children}</h3>;
};

export default subSectionTitle;
