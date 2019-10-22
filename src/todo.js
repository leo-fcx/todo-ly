export default class Todo {
  constructor(data) {
    if (!data || !data.description)
      throw new Error('Cannot create TODO item without description');

    this.description = data.description;
  }

  update(data) {
    this.done = data.done;
  }

  delete() {
    this.deleted = true;
  }
}