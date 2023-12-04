class Stack<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }
  push(...items: T[]): void {
    this.items.push(...items);
  }
  pop(): void {
    this.items.pop();
  }
  print(): void {
    console.log(this.items);
  }
}

const numberStact = new Stack<number>();
numberStact.push(2,3)
numberStact.pop();
numberStact.print()
const stringStack = new Stack<string>();
stringStack.push("Pranil", "TypeScript")
stringStack.print()