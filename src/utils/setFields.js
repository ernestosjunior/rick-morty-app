export const setFields = (setState, field, value) => {
  setState((prev) => ({ ...prev, [field]: value }));
};
