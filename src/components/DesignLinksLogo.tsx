import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'official' | 'dark-nav' | 'minimal' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const DesignLinksLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'official',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-9 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto',
    hero: 'h-24 md:h-32 w-auto',
  }[size];

  // Official logo visual matching the uploaded brand asset:
  // "design" in deep navy
  // "CONSTRUCTION" & "PROPERTY" in orange rectangles with white text
  // "links" in deep navy with the architectural roof pitch stem on 'k'
  // When variant === 'official', it includes the warm architectural subtle parchment background

  return (
    <div
      className={`inline-flex items-center select-none ${
        variant === 'official'
          ? 'bg-[#f4f2ec] p-2.5 rounded-lg border border-stone-300/40 shadow-xs'
          : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 380 320"
        className={`${sizeClasses} shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Design Links Construction & Property Logo"
      >
        {/* Navy brand color: #0b2f6c or #0e3579 */}
        <g id="brand-wordmark">
          {/* "design" wordmark */}
          <text
            x="30"
            y="135"
            fill={variant === 'dark-nav' ? '#ffffff' : '#0e3579'}
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="800"
            fontSize="98"
            letterSpacing="-2.5"
          >
            design
          </text>

          {/* Orange badges container */}
          <g transform="translate(32, 166)">
            {/* CONSTRUCTION badge */}
            <rect x="0" y="0" width="108" height="26" fill="#ea580c" rx="1.5" />
            <text
              x="54"
              y="18"
              fill="#ffffff"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="800"
              fontSize="12.5"
              textAnchor="middle"
              letterSpacing="0.4"
            >
              CONSTRUCTION
            </text>

            {/* PROPERTY badge */}
            <rect x="0" y="31" width="76" height="26" fill="#ea580c" rx="1.5" />
            <text
              x="38"
              y="49"
              fill="#ffffff"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="800"
              fontSize="12.5"
              textAnchor="middle"
              letterSpacing="0.4"
            >
              PROPERTY
            </text>
          </g>

          {/* "links" with house roof on 'k' */}
          <g
            fill={variant === 'dark-nav' ? '#ffffff' : '#0e3579'}
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="800"
          >
            {/* l */}
            <rect x="152" y="148" width="13" height="74" rx="1" />

            {/* i */}
            <rect x="174" y="167" width="13" height="55" rx="1" />
            <circle cx="180.5" cy="153" r="6.5" />

            {/* n */}
            <path
              d="M197 167h13v8.5c3.5-6.5 10.5-9.5 18-9.5 10 0 16 6 16 16.5v39.5h-13v-36c0-6-3.5-9-9.5-9-6.5 0-11.5 4.5-11.5 12.5v32.5h-13V167z"
            />

            {/* k with architectural house roof pitch / chevron on stem */}
            <g>
              {/* Roof pitch apex atop 'k' vertical column */}
              {/* Triangular peak with hollow/solid architectural silhouette */}
              <path
                d="M272 88 L283 74 L294 88 L289 88 L289 222 L277 222 L277 88 Z"
                fill={variant === 'dark-nav' ? '#ffffff' : '#0e3579'}
              />
              {/* Downward notch accent at the bottom of the stem as in the logo */}
              <path
                d="M277 222 L283 230 L289 222 Z"
                fill={variant === 'dark-nav' ? '#ffffff' : '#0e3579'}
              />
              {/* Diagonal branches of k */}
              <path
                d="M288 188l21-21h16l-23 23 25 32h-16l-18-24-5 5v19h-10v-55h10v21z"
              />
            </g>

            {/* s */}
            <path
              d="M327 212c1.5 6 7 9.5 14 9.5 7.5 0 12-3.5 12-8.5 0-5.5-4.5-8-13.5-10.5-12.5-3.5-18.5-8.5-18.5-18 0-9.5 7.5-17.5 19.5-17.5 11.5 0 18.5 6.5 20 14h-11.5c-1-4-4.5-6.5-8.5-6.5-5 0-8 2.5-8 6 0 4.5 3.5 6.5 12.5 9 13.5 3.5 19.5 9 19.5 19.5 0 10.5-8.5 18.5-22 18.5-13.5 0-21.5-7.5-23-16h11z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
