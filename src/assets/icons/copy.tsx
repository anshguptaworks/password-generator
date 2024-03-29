import { IconProps } from "../index";

const Copy = ({ className, pathClassName }: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M16 6H20C21.333 6 22 6.667 22 8V20C22 21.334 21.333 22 20 22H10C8.667 22 8 21.334 8 20V18H4C2.667 18 2 17.333 2 16V4C2 2.667 2.667 2 4 2H14C15.333 2 16 2.667 16 4V6ZM10 20H20V8H10V20ZM8 16V8C8 6.667 8.667 6 10 6H14V4H4V16H8Z"
        fill="#262626"
        className={pathClassName}
      />
    </svg>
  );
};

export default Copy;
