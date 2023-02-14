import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-slate-900 text-gray-100">
				<Main />
				<NextScript />
				<script
					async
					src="https://cdn.requestmetrics.com/agent/current/rm.js"
					data-rm-token="z6nv8qk:q2ct3bc"
				></script>
			</body>
		</Html>
	);
}
