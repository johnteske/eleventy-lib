export default (...args) => {
  const len = args.length;
  if (len === 0 || len > 2) {
    throw new Error("Invalid number of arguments");
  }

  if (len === 1) {
    const [content] = args;
    return content != null ? content : "";
  }

  if (typeof args[0] === "function") {
    const [fn, content] = args;
    return content != null ? fn(content) : "";
  }

  const [template, content] = args;
  return content != null ? template : "";
};
