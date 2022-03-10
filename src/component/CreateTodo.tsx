import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { todoState } from '../atom';

interface IFrom {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      todo: 'nothing to do',
    },
  });

  const onValid = ({ todo }: IFrom) => {
    setTodos((oldValue) => [
      { text: todo, category: 'TO_DO', id: Date.now() },
      ...oldValue,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register('todo')}></input>
      <button>Make Plan</button>
    </form>
  );
}

export default CreateTodo;
