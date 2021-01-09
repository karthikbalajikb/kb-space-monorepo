import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-sm text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mb-8">
      <div className="flex space-x-4 mb-4">
        <ExternalLink href="https://twitter.com/_WhatToLook">
          <span className="sr-only">Twitter</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/company/whattolook">
          <span className="sr-only">LinkedIn</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://www.youtube.com/channel/UCcbxh_2d47SRD_xmS4ZwqjA">
          <span className="sr-only">YouTube</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
              <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="mailto:hello@kbtechspace.com">
          <span className="sr-only">Email</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </g>
          </svg>
        </ExternalLink>
      </div>
      {/* <div className="space-x-3">
        <Link href="/uses">
          <a className="text-sm text-gray-500 hover:text-gray-600">/uses</a>
        </Link>
        <Link href="/newsletter">
          <a className="text-sm text-gray-500 hover:text-gray-600">
            /newsletter
          </a>
        </Link>
        <Link href="/snippets">
          <a className="text-sm text-gray-500 hover:text-gray-600">/snippets</a>
        </Link>
      </div> */}
      <div className="space-x-3 text-gray-600 text-sm">Designed and Developed by <a href="https://kbtechspace.com/">KB Techspace</a></div>
    </footer>
  );
}

export default Footer;
