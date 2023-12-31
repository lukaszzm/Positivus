import specializationImage from '../assets/specialization.jpg';
import technologyImage from '../assets/technology.jpg';
import clientRelationshipImage from '../assets/client-relationship.jpg';
import learningImage from '../assets/learning.jpg';
import type { Pillar } from '@/interfaces/Pillar';

export const pillars = [
	{
		number: 1,
		title: 'Expertise and Specialization',
		description:
			'Stay at the forefront of digital marketing trends and tools. Specialize in areas such as social media marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, and email marketing.',
		src: specializationImage,
		alt: 'image of expertise and specialization',
	},
	{
		number: 2,
		title: 'Innovative Technology and Tools',
		description:
			'Invest in cutting-edge technologies and tools to streamline processes and improve efficiency. This might include marketing automation platforms, data analytics tools, customer relationship management (CRM) systems, and more.',
		src: technologyImage,
		alt: 'image of innovative technology',
	},
	{
		number: 3,
		title: 'Client Relationships and Communication',
		description:
			'Prioritize client satisfaction by understanding their goals, challenges, and expectations. Tailor your strategies to meet their unique needs and objectives.',
		src: clientRelationshipImage,
		alt: 'image of client relationship',
	},
	{
		number: 4,
		title: 'Talent and Continuous Learning',
		description:
			'Assemble a team with diverse skill sets and expertise. Ensure that team members are well-versed in the latest industry trends and technologies.',
		src: learningImage,
		alt: 'image of learning',
	},
] as const satisfies Array<Pillar>;
