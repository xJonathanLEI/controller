import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
import { IconProps } from "../types";

export const DollarIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, ...props }, forwardedRef) => (
      <svg
        viewBox="0 0 24 24"
        className={iconVariants({ size, className })}
        ref={forwardedRef}
        {...props}
      >
        <path
          d="M13.5423 3V4.12434V5.37868C13.5985 5.38571 13.6512 5.39274 13.7074 5.40328C13.7215 5.40679 13.732 5.40679 13.746 5.41031L15.4326 5.7195L16.5393 5.92329L16.1353 8.13683L15.0285 7.93305L13.3596 7.62737C12.2598 7.46574 11.2901 7.57466 10.6084 7.84521C9.9268 8.11575 9.65274 8.48819 9.5895 8.83252C9.51923 9.20847 9.57193 9.41929 9.63166 9.54929C9.69491 9.68632 9.82491 9.84091 10.0814 10.0131C10.6541 10.389 11.5325 10.635 12.6709 10.9371L12.7728 10.9653C13.7777 11.2323 15.0074 11.5555 15.9209 12.1528C16.4199 12.4796 16.8907 12.9223 17.1823 13.5407C17.481 14.1696 17.5442 14.8723 17.4072 15.6207C17.1647 16.9559 16.2442 17.8483 15.1023 18.3156C14.6209 18.5124 14.0974 18.6389 13.5423 18.7021V19.8757V21H11.2936V19.8757V18.6494C11.2795 18.6459 11.262 18.6459 11.2479 18.6424H11.2409C10.3836 18.5089 8.97462 18.14 8.02596 17.7183L7 17.2616L7.91353 15.2061L8.93949 15.6629C9.67382 15.9897 10.8825 16.3094 11.5817 16.4218C11.9576 16.478 12.3125 16.5026 12.6428 16.5061H12.6639C13.3033 16.5061 13.8444 16.4043 14.2555 16.2391C14.8493 15.9967 15.1199 15.6453 15.1972 15.2237C15.2639 14.8513 15.2112 14.6369 15.1515 14.5069C15.0847 14.3664 14.9547 14.2118 14.6947 14.0396C14.1185 13.6637 13.2366 13.4177 12.0947 13.1156L11.9963 13.091C10.9914 12.8134 9.76166 12.4866 8.84814 11.8893C8.34921 11.5626 7.88191 11.1163 7.59028 10.498C7.29514 9.86902 7.23541 9.16631 7.37595 8.41792C7.62893 7.07574 8.63381 6.20437 9.77572 5.75112C10.243 5.5649 10.756 5.43842 11.2936 5.36463V4.12434V3H13.5423Z"
          fill="currentColor"
        />
      </svg>
    ),
  ),
);

DollarIcon.displayName = "DollarIcon";
