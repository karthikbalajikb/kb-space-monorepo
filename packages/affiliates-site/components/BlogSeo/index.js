import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://kbtechspace.com${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – Karthik Balaji`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Karthik Balaji"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/logos/favicons/vision.svg"
        publisherName="Karthik Balaji"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
