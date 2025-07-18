const ArrowDownIcon = ({
  color = "#ffffff",
  width = "18",
  height = "18",
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
        d="M14.9401 6.71252L10.0501 11.6025C9.47256 12.18 8.52756 12.18 7.95006 11.6025L3.06006 6.71252"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
