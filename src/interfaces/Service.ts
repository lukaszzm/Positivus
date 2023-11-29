import type { ColorVariant } from "./ColorVariant";

export interface Service {
    title: string;
	icon: string;
	href: string;
	bgColor: ColorVariant;
	headingVariant: ColorVariant;
	iconBackground: ColorVariant;
	iconColor: ColorVariant;
	textColor: ColorVariant;
}