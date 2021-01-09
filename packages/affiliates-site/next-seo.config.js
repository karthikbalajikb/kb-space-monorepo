const title = 'What To Look – Helps you what to look when buying, starting things';
const description =
  'Helps you what to look when buying, starting things - Electronics, Lifestyle, Health, Startups, Tech';

const SEO = {
  title,
  description,
  canonical: 'https://whattolook.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://whattolook.com',
    title,
    description,
    images: [
      {
        url: 'https://whattolook.com/logos/favicons/vision.svg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@_WhatToLook',
    site: '@_WhatToLook',
    cardType: 'summary_large_image'
  }
};

export default SEO;
