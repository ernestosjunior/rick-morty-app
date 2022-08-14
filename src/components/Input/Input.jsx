export const Input = ({
  placeholder,
  type = "text",
  onChange,
  id,
  className,
}) => {
  return (
    <input
      id={id}
      className={`h-[45px] border border-solid border-[#D5D5D5] rounded-[5px] bg-white ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
