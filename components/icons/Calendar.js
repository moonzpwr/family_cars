import * as React from "react";

function SvgCalendar(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path d="M1.668 9.168h16.664v7.5a.833.833 0 01-.832.832h-15a.833.833 0 01-.832-.832zm12.5-6.668H17.5c.46 0 .832.375.832.832V7.5H1.668V3.332c0-.457.371-.832.832-.832h3.332V.832H7.5V2.5h5V.832h1.668zm0 0" />
    </svg>
  );
}

export default SvgCalendar;
