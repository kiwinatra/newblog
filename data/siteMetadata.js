const siteMetadata = {
  title: 'Merry Christmas Blog | kiwinatra',
  author: 'kiwinatra',
  headerTitle: 'Merry Christmas Musings',
  description: 'My personal blog where I share my musings, now with a festive Christmas twist!',
  snippets: 'Reuseable code snippets collected by kiww',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://kiwi.xo.je',
  siteRepo: 'https://github.com/kiwinatra/newblog',
  siteLogo: '/static/images/logo.png',
  image: 'https://cdn.pfps.gg/pfps/7165-anime-cool.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'dude2@atomicmail.io',
  github: 'https://github.com/kiwinatra',
  twitter: 'https://twitter.com/_kiwiww_',
  linkedin: 'https://www.linkedin.com/in/going-desai-2bb1b0160/',
  website: 'https://kiwi.xo.je',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'private-xkwi', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'dark',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: '_neverminder_',
  },
}

module.exports = siteMetadata
