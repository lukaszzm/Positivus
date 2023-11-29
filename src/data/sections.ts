import type { Section } from "@/interfaces/Section";

export const sections = [
    {
        id: "use-cases",
        title: "Case Studies",
        description: "We have worked with a variety of clients across different industries. Here are some of our success stories."
    },
    {
        id: "contact",
        title: "Contact Us",
        description: "Connect with Us: Let's Discuss Your Digital Marketing Needs"
    },
    {
        id: "header",
        title: "Navigating the digital landscape for success",
        description: "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
    },
    {
        id: "mainAbout",
        title: "About us",
        description: ` is a leading digital agency known for its innovative approach to creative solutions. Specializing in web design, digital marketing,
			and interactive media, we combine technology with artistic flair to deliver customized experiences.`
    },
    {
        id: "pillars",
        title: "Pillars",
        description: "Explore our agency's core strengths: Specialization, Innovative Technology, Client Relationship and Continuous Learning"
    },
    {
        id: "services",
        title: "Services",
        description: "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
    },
    {
        id: "team",
        title: "Team",
        description: "Meet the skilled and experienced team behind our successful digital marketing strategies"
    },
    {
        id: "testimonals",
        title: "Testimonals",
        description: "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
    },
    {
        id: "working-process",
        title: "Our Working Process",
        description: "Step-by-Step Guide to Achieving Your Business Goals"

    }
] as const satisfies Array<Section>