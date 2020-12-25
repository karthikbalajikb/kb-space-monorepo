import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';

import TestComponent from '@/components/TestComponent';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  Tweet,
  TestComponent
};

export default MDXComponents;
