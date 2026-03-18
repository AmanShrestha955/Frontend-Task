const Button = ({
  right = false,
  active = false,
  onClick = () => {},
}: {
  right: boolean;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      disabled={!active}
      className={`absolute z-50 ${active ? "cursor-pointer" : ""} top-[50%] -translate-y-[50%] ${right ? "right-0" : "left-0"} size-15.5 rounded-full bg-white shadow-button flex justify-center items-center`}
      onClick={onClick}
    >
      {right ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.4099 6.61C16.9566 6.06327 17.843 6.06327 18.3898 6.61L26.7898 15.01C27.3365 15.5567 27.3365 16.4432 26.7898 16.9899L18.3898 25.3899C17.843 25.9366 16.9566 25.9366 16.4099 25.3899C15.8631 24.8432 15.8631 23.9567 16.4099 23.41L22.4199 17.4L6.19981 17.4C5.42661 17.4 4.7998 16.7731 4.7998 16C4.7998 15.2268 5.42661 14.6 6.19981 14.6H22.4199L16.4099 8.5899C15.8631 8.04317 15.8631 7.15674 16.4099 6.61Z"
            fill="#1F2937"
          />
        </svg>
      ) : (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5898 25.3899C15.043 25.9366 14.1566 25.9366 13.6099 25.3899L5.20986 16.9899C4.66312 16.4432 4.66312 15.5567 5.20986 15.01L13.6099 6.61C14.1566 6.06327 15.043 6.06327 15.5898 6.61C16.1365 7.15674 16.1365 8.04317 15.5898 8.5899L9.5797 14.6H25.7998C26.573 14.6 27.1998 15.2268 27.1998 16C27.1998 16.7732 26.573 17.4 25.7998 17.4L9.5797 17.4L15.5898 23.41C16.1365 23.9567 16.1365 24.8432 15.5898 25.3899Z"
            fill="#1F2937"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
