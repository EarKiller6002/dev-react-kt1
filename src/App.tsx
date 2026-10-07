import { useState } from 'react';
// import { TaskBoard, Task } from './TaskBoardComponents';
import { TaskBoard} from './TaskBoardComponents.tsx';
import type { Task } from './TaskBoardComponents.tsx';

export const App = () => {
  const [meinTasks] = useState<Task[]>([
    { id: 1, title: 'Изучить типизацию props', isCompleted: true },
    { id: 2, title: 'Разобраться с композицией компонентов', isCompleted: false },
    { id: 3, title: 'Повторить условный рендеринг', isCompleted: false },
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial Black' }}>
      <h1>Панель управления проектом</h1>
      <TaskBoard tasks={meinTasks} />
    </div>
  );
};