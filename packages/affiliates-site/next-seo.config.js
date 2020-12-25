const title = 'Karthik Balaji – Developer, writer, creator.';
const description =
  'Front-end developer, JavaScript, UI/UX enthusiast.';

const SEO = {
  title,
  description,
  canonical: 'https://kbtechspace.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://kbtechspace.com',
    title,
    description,
    images: [
      {
        url: 'https://kbtechspace.com/logos/logo.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@karthikbalaji99',
    site: '@karthikbalaji99',
    cardType: 'summary_large_image'
  }
};

export default SEO;
