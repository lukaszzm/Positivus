import { sections } from '@/data/sections';

export const getSectionById = (sectionId: string) => {
	const section = sections.find((section) => section.id === sectionId);

	if (!section) {
		throw new Error(`Section with id ${sectionId} not found`);
	}

	return section;
};
