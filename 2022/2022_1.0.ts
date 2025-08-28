import { getInput } from "../getInput";

const input =
  getInput("/Users/stefandrescher/Projekte/AoC/2022/input.txt") ?? [];

console.log(input);

//Task: Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

//Step1: sum up values up to empty string

const calories = (): number => {
  const { maxCalories } = input.reduce(
    (acc, cal) => {
      if (cal === "") {
        return {
          maxCalories: Math.max(acc.maxCalories, acc.sum),
          sum: 0,
        };
      }
      return {
        maxCalories: acc.maxCalories,
        sum: acc.sum + Number(cal),
      };
    },
    { maxCalories: 0, sum: 0 }
  );
  return maxCalories;
};

//Step2: find maximum of sums

console.log(calories());
