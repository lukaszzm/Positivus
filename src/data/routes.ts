import type { Route } from '@/interfaces/Route';

export const routes = [
	{
		label: 'About us',
		href: '/about-us',
	},
	{
		label: 'Services',
		href: '/#services',
	},
	{
		label: 'Use cases',
		href: '/#use-cases',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
] as const satisfies Array<Route>;
