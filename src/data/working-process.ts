import type { WorkingStep } from "@/interfaces/WorkingStep";

export const workingSteps = [
	{
		number: '01',
		title: 'Consultation',
		description:
			'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
	},
	{
		number: '02',
		title: 'Research and Strategy Development',
		description:
			'After the consultation, we dive into in-depth research and strategy development. Our team explores market trends, competitor analysis, and emerging opportunities. We craft a comprehensive digital strategy customized for your business.',
	},
	{
		number: '03',
		title: 'Implementation',
		description:
			"Once the strategy is set, we move into the implementation phase. Our experts put the plan into action, creating and optimizing your digital assets, whether it's a website, advertising campaigns, or social media presence.",
	},
	{
		number: '04',
		title: 'Monitoring and Optimization',
		description:
			"We continuously monitor your digital presence to ensure it's performing at its best. This step involves tracking metrics, analyzing data, and making necessary adjustments to optimize your strategy and achieve better results.",
	},
	{
		number: '05',
		title: 'Reporting and Communication',
		description:
			'Transparency is key. We provide regular reports that highlight the impact of our efforts on your business. Our team is always available to communicate, discuss progress, and address any questions or concerns you may have.',
	},
	{
		number: '06',
		title: 'Continual Improvement',
		description:
			'The digital landscape evolves, and so do we. In this step, we focus on ongoing improvement. We adapt to the changing digital environment, explore new opportunities, and refine our strategies to keep your business ahead of the curve. Your success is our motivation.',
	},
] as const satisfies Array<WorkingStep>