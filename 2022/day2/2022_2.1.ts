import { getInput } from "../../getInput";

const input =
  getInput("/Users/stefandrescher/Projekte/AoC/2022/day2/input.txt") ?? [];

console.log(input);

// Initial: Rock (A) defeats Scissors (C), Scissors (C) defeats Paper (B), and Paper (B) defeats Rock (A).
// Response: Rock (X) defeats Scissors (Z), Scissors (Z) defeats Paper (Y), and Paper (Y) defeats Rock (X).
const pointsForGame = (tuple: string) => {
  switch (tuple) {
    case "A B":
    case "B C":
    case "C A":
      return 6;

    case "A A":
    case "B B":
    case "C C":
      return 3;

    case "B A":
    case "C B":
    case "A C":
      return 0;

    default:
      throw new Error(`Unkwon tuple "${tuple}`)
  }
};

//Y draw
//X lose
//Z win
//A rockock
//B paper
//C scissors

const convertedTuple = (tuple: string) => {
  switch (tuple) {
    case "A Y":
      return "A A"
    case "A Z":
      return "A B"
    case "A X":
      return "A C"
    case "B Y":
      return "B B"
    case "B Z":
      return "B C"
    case "B X":
      return "B A"
    case "C Y":
      return "C C"
    case "C Z":
      return "C A"
    case "C X":
      return "C B"

    default:
      throw new Error(`Unkwon tuple "${tuple}`)

  }
}
// 0 if you lost, 3 if the round was a draw, and 6 if you won
// 1 for Rock, 2 for Paper, and 3 for Scissors

const pointsForShape = (tuple: string) => {
  switch (tuple[2]) {
    case "A":
      return 1;
    case "B":
      return 2;
    case "C":
      return 3;

    default:
      throw new Error(`Unkwon shape "${tuple[2]}`)
  }
};

const getTotalPoints = () =>
  input.reduce(
    (acc, tuple) => acc + pointsForGame(convertedTuple(tuple)) + pointsForShape(convertedTuple(tuple)),
    0
  );

console.log(getTotalPoints());
