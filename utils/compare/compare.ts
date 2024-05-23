/**
 * Compares two objects to check if they are equal with infinite depth.
 * @template T - The type of object being compared.
 * @param {any} obj1 - The first object to compare.
 * @param {any} obj2 - The second object to compare.
 * @returns {boolean} - Returns `true` if the objects are equal, otherwise returns `false`.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const compare = (obj1: any, obj2: any): boolean => {
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  if (typeof obj1 === "object" && obj1 !== null && obj2 !== null) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      return obj1.length === obj2.length && obj1.every((_, index) => compare(obj1[index], obj2[index]));
    }

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keys1.every((key) => compare(obj1[key], obj2[key]));
  }

  return obj1 === obj2;
};

console.time();
const test1 = compare(
  {
    id: 9465,
    uid: "a3bf52df-5103-42bd-8d40-d91f6f3de924",
    password: "U0VtqkfSju",
    first_name: "Danny",
    last_name: "Rodriguez",
    username: "danny.rodriguez",
    email: "danny.rodriguez@email.com",
    avatar: "https://robohash.org/idsitsaepe.png?size=300x300&set=set1",
    gender: "Male",
    phone_number: "+95 (520) 904-4344 x7442",
    social_insurance_number: "914150149",
    date_of_birth: "1975-08-24",
    employment: {
      title: "Regional Real-Estate Architect",
      key_skill: "Technical savvy",
    },
    address: {
      city: "Hettingerport",
      street_name: "Otha Fort",
      street_address: "3570 Wyatt Field",
      zip_code: "03389-6078",
      state: "Utah",
      country: "United States",
      coordinates: {
        lat: 9.978145390403682,
        lng: -136.2670153411098,
      },
    },
    credit_card: {
      cc_number: "4847-2723-8172-2770",
    },
    subscription: {
      plan: "Standard",
      status: "Idle",
      payment_method: "Debit card",
      term: "Annual",
    },
  },
  {
    id: 9465,
    uid: "a3bf52df-5103-42bd-8d40-d91f6f3de924",
    password: "U0VtqkfSju",
    first_name: "Danny",
    last_name: "Rodriguez",
    username: "danny.rodriguez",
    email: "danny.rodriguez@email.com",
    avatar: "https://robohash.org/idsitsaepe.png?size=300x300&set=set1",
    gender: "Male",
    phone_number: "+95 (520) 904-4344 x7442",
    social_insurance_number: "914150149",
    date_of_birth: "1975-08-24",
    employment: {
      title: "Regional Real-Estate Architect",
      key_skill: "Technical savvy",
    },
    address: {
      city: "Hettingerport",
      street_name: "Otha Fort",
      street_address: "3570 Wyatt Field",
      zip_code: "03389-6078",
      state: "Utah",
      country: "United States",
      coordinates: {
        lat: 9.978145390403682,
        lng: -136.2670153411098,
      },
    },
    credit_card: {
      cc_number: "4847-2723-8172-2770",
    },
    subscription: {
      plan: "Standard",
      status: "Idle",
      payment_method: "Debit card",
      term: "Annual",
    },
  },
);
console.timeEnd();

console.log("🚀 ~ file: same-object.ts:25 ~ test1:", test1);
