const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "01":
      return {
        info: payload.data,
      };
    case "02":
      return {
        info: payload.internal,
      };
    case "03":
      return {
        info: payload.surface,
      };

    default:
      break;
  }
};

export default reducer;
