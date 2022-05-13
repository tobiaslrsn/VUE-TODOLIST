export class Todo {
  id: number;
  constructor(
    public todo: string,

    // public date: Date,
    public done: boolean
  ) {
    this.id = new Date().getTime();
  }
}
