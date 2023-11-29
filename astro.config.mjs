import { defineConfig, passthroughImageService } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		ssr: {
			noExternal: ['react-icons'],
		},
	},
	image: {
		service: passthroughImageService(),
	},
});
