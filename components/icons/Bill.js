import * as React from "react";

function SvgBill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path d="M0 16.25h20V3.75H0zm10-10a3.751 3.751 0 010 7.5 3.751 3.751 0 010-7.5zm0 0" />
    </svg>
  );
}

export default SvgBill;
