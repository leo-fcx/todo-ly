import assert from 'power-assert';
import Todo from './todo';

describe('Todo', () => {
  const data = { description: 'My todo'};
  let todo;

  beforeEach(() => {
    todo = new Todo({ description: 'My todo'});
  });

  it('should be able to create new item', () => {
    assert(todo);
    assert.equal(todo.description, data.description);
  });

  it('should not be able to create item without description', () => {
    assert.throws( () => {
      new Todo({})
    }, Error, 'Cannot create TODO item without description');
  });

  it('should be able to mark an item as done', () => {
    todo.update({ done: true });
    assert(todo.done);
  });

  it('should be able to undo marking an item as done', () => {
    todo.update({ done: true });
    assert(todo.done);
    todo.update({ done: false });
    assert(!todo.done);
  });

  it('should be able to delete an item by setting `deleted` prop to true', () => {
    todo.delete();
    assert(todo.deleted);
  });
});