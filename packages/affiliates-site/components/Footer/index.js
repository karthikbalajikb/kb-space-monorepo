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
        <ExternalLink href="https://www.facebook.com/WhatToLook/">
          <span className="sr-only">Faceboob</span>
          <svg className="h-5 w-5" viewBox="0 0 512 512">
            <g>
              <path
                d="m489.410156 21.847656c-14.410156-14.089844-33.378906-21.847656-53.410156-21.847656h-361c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75h362c41.355469 0 75-33.644531 75-75v-362c0-20.039062-8.023438-38.914062-22.589844-53.152344zm-218.410156 249.152344h-30v-30h30c8.285156 0 15-6.714844 15-15 0-41.140625-.003906-59.957031-.003906-68.613281-.003906-15.933594.019531-33.289063 15.582031-46.605469 11.863281-10.148438 26.984375-16.277344 47.59375-19.292969 21.742187-3.175781 43.808594-2.183593 67.113281 3.046875-1.769531 11.910156-3.867187 26.019532-5.449218 36.652344-8.84375-1.792969-24.019532-3.242188-36.441407-1.136719-27.578125 4.664063-43.394531 21.777344-43.394531 46.949219v49c0 8.285156 6.714844 15 15 15h55.789062l-7.5 30h-48.289062c-8.285156 0-15 6.714844-15 15v196h-45v-196c0-8.285156-6.714844-15-15-15zm211 166c0 24.8125-20.1875 45-45 45h-76v-181h45c6.882812 0 12.882812-4.683594 14.550781-11.363281l15-60c1.121094-4.480469.113281-9.226563-2.726562-12.867188-2.84375-3.640625-7.207031-5.769531-11.824219-5.769531h-60v-34c0-6.898438 1.421875-14.5 18.40625-17.375 13.289062-2.25 25.164062.71875 35.640625 3.34375 5.035156 1.257812 10.453125 3.175781 16.628906-1.003906 3.476563-2.355469 5.808594-6.058594 6.429688-10.210938 0 0 6.738281-45.269531 9.84375-66.199218 1.105469-7.453126-3.484375-14.570313-10.734375-16.632813-29.296875-8.332031-65.132813-11.070313-92.183594-7.117187-26.460938 3.871093-46.601562 12.1875-62.957031 26.183593-22.753907 19.46875-25.578125 44.449219-25.871094 61.484375-.007813.347656-.003906 30.648438-.003906 61.527344h-30.199219c-8.285156 0-15 6.714844-15 15v60c0 8.285156 6.714844 15 15 15h30v181h-181c-24.8125 0-45-20.1875-45-45v-362c0-24.8125 20.1875-45 45-45h361c24.933594 0 46 20.609375 46 45zm0 0"
                fill="#6b7280"
              />
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
      <div className="space-x-3 text-gray-600 text-sm">
        Designed and Developed by{" "}
        <a href="https://kbtechspace.com/">KB Techspace</a>
      </div>
    </footer>
  );
}

export default Footer;
