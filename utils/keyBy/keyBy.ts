/**
 * Creates an object composed of keys generated from the results of running each element of `array` through `iteratee`.
 * @template T
 * @param {T[]} array - The array to convert.
 * @param {keyof T} key - The property of the array elements to use as the key
 * @returns {Object<string, T>} Returns the composed aggregate object.
 */
export const keyBy = <T>(array: T[], key: keyof T): { [key: string]: T } => {
  return array.reduce((r, x) => ({ ...r, [String(x[key])]: x }), {});
};
