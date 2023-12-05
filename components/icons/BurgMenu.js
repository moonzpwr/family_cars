import * as React from "react";

function SvgBurgMenu(props) {
  return (
    <svg
      width={24}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.667V0h24v2.667H0zm0 6.666h24V6.667H0v2.666zM0 16h24v-2.667H0V16z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgBurgMenu;
