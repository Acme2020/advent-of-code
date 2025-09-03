import { getInput } from "../../getInput";

const input =
  getInput("/Users/stefandrescher/Projekte/AoC/2022/day1/input.txt") ?? [];

console.log(input);

//Task: Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

//Step1: sum up values up to empty string

const calories = (): number => {
  const { maxCalories } = [...input, ""].reduce(
    (acc, cal) => {
      if (cal === "") {
        return {
          maxCalories: [...acc.maxCalories, acc.sum],
          sum: 0,
        };
      }
      return {
        maxCalories: acc.maxCalories,
        sum: acc.sum + Number(cal),
      };
    },
    { maxCalories: [], sum: 0 }
  );
  console.log(maxCalories);
  return maxCalories
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, cal) => (acc += cal), 0);
};

//Step2: find maximum of sums

console.log(calories());
