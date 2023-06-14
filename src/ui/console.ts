import * as readline from "node:readline";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
export function print(str: string): void {
  console.log(str);
  console.log();
}

export function clear(addTopBorder: boolean): void {
  console.clear();
  if (addTopBorder) {
    print("------------------------------------");
  }
}

export function askQuestion(question: string, callback: (arg: string) => void) {
  reader.question(`❓ ${question} 👉 `, callback);
}
