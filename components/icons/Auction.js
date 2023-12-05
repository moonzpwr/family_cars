import * as React from "react";

function SvgAuction(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={164}
      height={165}
      {...props}
    >
      <image
        width={164}
        height={165}
        xlinkHref="data:img/png;base64,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"
      />
    </svg>
  );
}

export default SvgAuction;
