import { FC } from "react";

export const SectionTitle: FC<any> = ({ children }) => {
	return <h2 className="text-xl font-bold mb-2">{children}</h2>;
};

export default SectionTitle;
