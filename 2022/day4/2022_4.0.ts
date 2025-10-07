import { getInput } from "../../getInput";

const input =
  getInput("/Users/stefan/Repos/advent-of-code/2022/day4/input.txt") ?? [];

console.log("Input: ", input);

const pairs = input.map((pair: string) => pair.split(",") as [string, string]) // [ [2-8, 3-7], [2-4,6-8] ]

const completeOverlap = (pair: [string, string]) => {

  const start1 = Number(pair[0].split("-")[0])
  const end1 = Number(pair[0].split("-")[1])
  const start2 = Number(pair[1].split("-")[0])
  const end2 = Number(pair[1].split("-")[1])

  if(start1 >= start2 && end1 <= end2) { 
    return true 
  } // 1 ist komplett in 2

  return start1 <= start2 && end1 >= end2 // 2 ist komplett in 1 oder return false
}

const numberOfOverlaps = pairs.filter((pair: [string, string]) => completeOverlap(pair)).length

console.log(numberOfOverlaps)
