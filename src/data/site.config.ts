interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'GDSC NTNU',
	title: 'GDSC NTNU Blog',
	description:
		'Welcome to the GDSC NTNU blog! Here you can find posts about technology, community, and more.',
	lang: 'en',
	ogLocale: 'en_US',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
