/**
 * Extracts specific properties from an object and
 * returns a new object containing only those properties.
 *
 * @param {object} object - The object from which to extract properties.
 * @param {string[]} keys - An array of strings representing the names of the properties to be extracted.
 * @returns {object} A new object containing the specified properties of the original object.
 *
 * @example
 * let obj = { name: "John", age: 30, job: "Developer" };
 * let extractedProps = pick(obj, ["name", "age"]);
 * console.log(extractedProps); // { name: "John", age: 30 }
 *
 */
export const pick = (object: Record<string, string>, keys: string[]): object => {
  return keys.reduce((obj: Record<string, string>, key: string) => {
    if (object && object[key]) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

export const pickV2 = <T extends object>(obj: T, properties: (keyof T | string)[]) => {
  return Object.fromEntries(
    Object.keys(obj)
      .filter((key) => !properties.includes(key))
      .map((key) => [key, obj[key as keyof typeof obj]]),
  );
};
