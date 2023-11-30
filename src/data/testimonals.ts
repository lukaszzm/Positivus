import type { Testimonal } from '@/interfaces/Testimonal';

export const testimonals = [
	{
		quote:
			'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
		name: 'James Rodriguez',
		role: `Marketing Director, Nature's Harvest`,
	},
	{
		quote:
			'I am incredibly impressed with the outstanding services provided by Positivus. From the initial consultation to the execution of our digital marketing strategy, the team demonstrated a profound understanding of our business needs and industry trends. Positivus not only increased our online visibility but also drove substantial traffic to our website, resulting in a significant boost in sales.',
		name: 'Sarah Thompson',
		role: 'CEO, InnovateTech Solutions',
	},
	{
		quote:
			'Positivus has truly transformed our online presence and helped us navigate the complexities of the digital landscape. Their comprehensive approach to digital marketing, encompassing social media management, SEO, and targeted advertising, has yielded remarkable results for our business. ',
		name: 'Emily Chen',
		role: 'Founder, UrbanEats',
	},
] as const satisfies Array<Testimonal>;
