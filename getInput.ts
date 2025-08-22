import { readFileSync } from "fs";

export function getInput(filePath) {
  try {
    const data = readFileSync(filePath);
    return data.toString().split("\n");
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}
