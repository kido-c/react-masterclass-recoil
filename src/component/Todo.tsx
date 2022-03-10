import { ITodo, todoState, Categories } from '../atom';
import { useSetRecoilState } from 'recoil';

function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      const newTodo = { text, category: event.currentTarget.name as any, id };
      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category === Categories.TO_DO ? null : (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category === Categories.DOING ? null : (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category === Categories.DONE ? null : (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default Todo;
