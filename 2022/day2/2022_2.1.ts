import { getInput } from "../../getInput";

const input =
  getInput("/Users/stefandrescher/Projekte/AoC/2022/day2/input.txt") ?? [];

console.log(input);

// Initial: Rock (A) defeats Scissors (C), Scissors (C) defeats Paper (B), and Paper (B) defeats Rock (A).
// Response: Rock (X) defeats Scissors (Z), Scissors (Z) defeats Paper (Y), and Paper (Y) defeats Rock (X).
const pointsForGame = (tuple: string) => {
  switch (tuple) {
    case "A Y":
    case "B Z":
    case "C X":
      return 6;

    case "A X":
    case "B Y":
    case "C Z":
      return 3;

    default:
      return 0;
  }
};

// 0 if you lost, 3 if the round was a draw, and 6 if you won
// 1 for Rock, 2 for Paper, and 3 for Scissors

const pointsForShape = (tuple: string) => {
  switch (tuple[2]) {
    case "X":
      return 1;
    case "Y":
      return 2;
    default:
      return 3;
  }
};

const getTotalPoints = () =>
  input.reduce(
    (acc, tuple) => acc + pointsForGame(tuple) + pointsForShape(tuple),
    0
  );

console.log(getTotalPoints());
