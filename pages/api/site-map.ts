import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	message: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	res.setHeader('Content-Type', 'application/xml');
	res.write(`<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	  <url>
		<loc>https://jonascodeblog.vercel.app/puppeteer-with-nest
		</loc>
		<lastmod>2022-08-13</lastmod>
	  </url>
	  <url>
		<loc>https://jonascodeblog.vercel.app/infrastructure-requirements-of-a-modern-frontend-application
		</loc>
		<lastmod>2022-08-13</lastmod>
	  </url>
	  <url>
		<loc>https://jonascodeblog.vercel.app/css-in-js-is-not-the-best-solution</loc>
		<lastmod>2022-08-13</lastmod>
	  </url>
	</urlset>`)
	res.end()

}