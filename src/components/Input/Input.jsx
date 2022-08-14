export const Input = ({ placeholder, type = "text", onChange, id }) => {
  return (
    <input
      id="id"
      className="h-[45px] border border-solid border-[#D5D5D5] rounded-[5px]"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
