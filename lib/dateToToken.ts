import alphabet from "../resources/alphabet.json";

export const dateToToken = (date: Date): string => {
  let array = date
    .toISOString()
    .replace(/[^0-9]/g, "")
    .split("");

  const initialLength = array.length;

  for (let i = 0; i < array.length; i++) {
    if (i === initialLength) array.push(".");

    if (Math.round(Math.random() * 10) === 3) {
      array.push(alphabet[Math.round(Math.random() * 27)]);
    } else if (Math.round(Math.random() * 2) === 1) {
      array.push(i.toString());
    }
  }

  return array.join("");
};
