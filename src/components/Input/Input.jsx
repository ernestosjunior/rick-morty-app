export const Input = ({ placeholder, type = "text", onChange }) => {
  return (
    <input
      className="h-[45px] border border-solid border-[#D5D5D5]"
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
