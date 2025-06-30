'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';

const RotatingGradientSVG = ({
  className,
  width = 400,
  height = 400,
}: {
  className?: React.CSSProperties | ClassValue | string;
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <svg
      className={cn('dark:text-clrOnyx text-white', className)}
      // width="552"
      // height="552"
      width={width}
      height={height}
      viewBox="0 0 552 552"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.69" filter="url(#filter0_d)">
        <g clipPath="url(#clip0)">
          <rect
            x="197.695"
            y="505.382"
            width="349.34"
            height="349.34"
            rx="3"
            transform="rotate(-115.737 197.695 505.382)"
            fill="currentColor"
          />
          <g clipPath="url(#paint0)">
            <g transform="matrix(0.326539 -0.157411 0.19823 0.411214 279.11 272.418)">
              <foreignObject
                x="-1002.76"
                y="-1002.76"
                width="2005.52"
                height="2005.52"
              >
                <div
                  className="rotating-gradient hidden dark:block"
                  style={{
                    background:
                      'conic-gradient(from 90deg, rgba(238,240,31,1) 0deg, rgba(242,244,31,1) 0.237055deg, rgba(88,208,1,1) 12.5345deg, rgba(55,53,60,1) 19.5926deg, rgba(55,53,60,1) 22.4587deg, rgba(54,52,60,1) 348.838deg, rgba(238,240,31,1) 360deg)',
                    height: '100%',
                    width: '100%',
                    opacity: 1,
                  }}
                ></div>
                <div
                  className="rotating-gradient block dark:hidden"
                  style={{
                    background:
                      'conic-gradient(from 90deg, rgba(238,240,31,1) 0deg, rgba(242,244,31,1) 0.237055deg, rgba(88,208,1,1) 12.5345deg, rgb(209, 209, 209) 19.5926deg, rgb(209, 209, 209) 22.4587deg, rgb(209, 209, 209) 348.838deg, rgba(238,240,31,1) 360deg)',
                    height: '100%',
                    width: '100%',
                    opacity: 1,
                  }}
                ></div>
              </foreignObject>
            </g>
          </g>
          <rect
            x="198.629"
            y="502.712"
            width="345"
            height="345"
            rx="4"
            transform="rotate(-115.737 198.629 502.712)"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.9"
          y="0.9"
          width="550.579"
          height="550.582"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="39"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dx="-3" dy="4" />
          <feGaussianBlur stdDeviation="40.55" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id="clip0">
          <rect
            x="197.695"
            y="505.382"
            width="349.34"
            height="349.34"
            rx="3"
            transform="rotate(-115.737 197.695 505.382)"
            fill="white"
          />
        </clipPath>
        <clipPath id="paint0">
          <rect
            x="150.801"
            y="841.043"
            width="913"
            height="725"
            transform="rotate(-115.737 150.801 841.043)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RotatingGradientSVG;
