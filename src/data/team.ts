import type { TeamMember } from '@/interfaces/TeamMember';

import FirstTeamMemberImage from '../assets/team-1.png';
import SecondTeamMemberImage from '../assets/team-2.png';
import ThirdTeamMemberImage from '../assets/team-3.png';
import FourthTeamMemberImage from '../assets/team-4.png';
import FifthTeamMemberImage from '../assets/team-5.png';
import SixthTeamMemberImage from '../assets/team-6.png';

export const teamMembers = [
	{
		src: FirstTeamMemberImage,
		name: 'John Smith',
		position: 'CEO and Founder',
		description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
		linkedinProfile: 'https://www.linkedin.com/',
	},
	{
		src: SecondTeamMemberImage,
		name: 'Jane Doe',
		position: 'Director of Operations',
		description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
		linkedinProfile: 'https://www.linkedin.com/',
	},
	{
		src: ThirdTeamMemberImage,
		name: 'Michael Brown',
		position: 'Senior SEO Specialist',
		description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
		linkedinProfile: 'https://www.linkedin.com/',
	},
	{
		src: FourthTeamMemberImage,
		name: 'Emily Johnson',
		position: 'PPC Manager',
		description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
		linkedinProfile: 'https://www.linkedin.com/',
	},
	{
		src: FifthTeamMemberImage,
		name: 'Brian Williams',
		position: 'Social Media Specialist',
		description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
		linkedinProfile: 'https://www.linkedin.com/',
	},
	{
		src: SixthTeamMemberImage,
		name: 'Sarah Kim',
		position: 'Content Creator',
		description: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
		linkedinProfile: 'https://www.linkedin.com/',
	},
] as const satisfies Array<TeamMember>;
