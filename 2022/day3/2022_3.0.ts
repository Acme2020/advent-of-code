import { getInput } from "../../getInput";

const input =
  getInput("/Users/stefandrescher/Projekte/AoC/2022/day3/input.txt") ?? [];

console.log(input);

const substring1 = (str: string) => str.substring(0, str.length / 2);

const substring2 = (str: string) => str.substring(str.length / 2, str.length);

const getCommonItem = (str1: string, str2: string) => {
  const set2 = new Set(str2);
  return str1.split("").find((char) => set2.has(char));
};

const getPriority = (char: string) =>
  char.charCodeAt(0) < 97 ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;

// => ["P", "a"]
const sum = input
  .map((rucksack) => getCommonItem(substring1(rucksack), substring2(rucksack)))
  .reduce((acc, curr) => acc + getPriority(curr ?? ""), 0);

console.log(sum);
