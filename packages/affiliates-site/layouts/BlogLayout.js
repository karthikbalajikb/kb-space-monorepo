import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import AppContainer from '@/components/AppContainer';
import BlogSeo from '@/components/BlogSeo';

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://whattolook.com/blog/${slug}`
  )}`;

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <AppContainer>
      <BlogSeo
        url={`https://whattolook.com/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <Image
              alt={frontMatter.by || 'Karthik Balaji'}
              height={24}
              width={24}
              src={`/logos/authors/${frontMatter.by}.png`}
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by || 'Karthik Balaji'}
              {' / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
        </div>
      </article>
    </AppContainer>
  );
}

export default BlogLayout;