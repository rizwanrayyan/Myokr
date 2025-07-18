import React from "react";

const LocalSalesIcon = ({
  color = "#ffffff",
  width = "22",
  height = "22",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.25732 8.41504V11.7825C2.25732 15.15 3.60732 16.5 6.97482 16.5H11.0173C14.3848 16.5 15.7348 15.15 15.7348 11.7825V8.41504"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99987 9C10.3724 9 11.3849 7.8825 11.2499 6.51L10.7549 1.5H7.25237L6.74987 6.51C6.61487 7.8825 7.62737 9 8.99987 9Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7326 9C15.2476 9 16.3576 7.77 16.2076 6.2625L15.9976 4.2C15.7276 2.25 14.9776 1.5 13.0126 1.5H10.7251L11.2501 6.7575C11.3776 7.995 12.4951 9 13.7326 9Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.22979 9C5.46729 9 6.58479 7.995 6.70479 6.7575L6.86979 5.1L7.22979 1.5H4.94229C2.97729 1.5 2.22729 2.25 1.95729 4.2L1.75479 6.2625C1.60479 7.77 2.71479 9 4.22979 9Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.75C7.7475 12.75 7.125 13.3725 7.125 14.625V16.5H10.875V14.625C10.875 13.3725 10.2525 12.75 9 12.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocalSalesIcon;
