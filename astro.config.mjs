// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Sentry Build',
      logo: {
        src: './src/assets/placeholder.svg',
        replacesTitle: true,
      },
      components: {
        // Use our custom logo component
        SiteTitle: './src/components/SentryLogo.astro',
      },
      social: {
        github: 'https://github.com/getsentry/sentry-build-academy-guide',
      },
      customCss: [
        // Add our custom Sentry theme
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Workshop',
          items: [
            { label: 'Quickstart', slug: 'quickstart' },
            { label: 'Getting Started with Sentry', slug: 'getting-started' },
            {
              label: 'Broken Academy Single Sign On (Tracing, Logs, Seer)',
              slug: 'troubleshooting-auth',
            },
            {
              label: 'Solving Broken Search (Sentry MCP, Seer)',
              slug: 'fixing-course-search',
            },
            {
              label: 'Debugging AI Implementations (AI Agentic Monitoring)',
              slug: 'debugging-ai-agent-monitoring',
            },
            {
              label: 'Taking apart new features (Sentry PR Review)',
              slug: 'new-feature-pr-review',
            },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Sentry Documentation', link: 'https://docs.sentry.io/' },
            {
              label: 'React SDK',
              link: 'https://docs.sentry.io/platforms/javascript/guides/react/',
            },
            {
              label: 'Node SDK',
              link: 'https://docs.sentry.io/platforms/javascript/guides/node/',
            },
          ],
        },
      ],
    }),
    sentry(),
  ],

  // Configure Vercel adapter with specific options for assets
  adapter: vercel({
    imageService: true,
    includeFiles: [
      './src/assets/**/*',
      './src/assets/img/**/*',
      './src/assets/img/**/*.gif',
      './src/assets/sentry-glyph-light-400x367.png',
    ],
  }),
});
