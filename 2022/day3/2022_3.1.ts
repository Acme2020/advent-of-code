import { getInput } from "../../getInput";

const input =
  getInput("/Users/stefandrescher/Projekte/AoC/2022/day3/input.txt") ?? [];


const result = () => {
  let badges: string[] = []
  let group: string[] = []
  input.forEach((bkp, index) => {
    group.push(bkp)

    if(index > 0 && (index + 1) % 3 === 0) {
      badges.push(findBadge(group))
      group = []
    }
  })

  return badges.reduce((acc, badge) => acc + getPriority(badge), 0)
}

function findBadge(group: string[]): string {
  const set2 = new Set(group[1]);
  const set3 = new Set(group[2]);
  for (const type of group[0]) {
    if (set2.has(type) && set3.has(type)) {
      return type;
    }
  }
  return 'n/a';
}

console.log(result() === 2689 ? 'Still good' : `B A D - ${result} !== 2689`)


function getPriority (char: string) {
  return char.charCodeAt(0) < 97 ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;
}
