export default <T>(fn: (T) => any, arr: T[]) => arr.map(fn).join("");
