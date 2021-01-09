import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogSeo = ({ title, summary, publishedAt, url, image, by  }) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://whattolook.com${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – What To Look`}
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
        authorName={by}
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/logos/favicons/vision.svg"
        publisherName="What To Look"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
