import * as React from "react";

function SvgCallUs(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={64}
      height={59}
      {...props}
    >
      <image
        width={64}
        height={59}
        xlinkHref="data:img/png;base64,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"
      />
    </svg>
  );
}

export default SvgCallUs;
