import React from 'react';

export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <li
      style={{
        textDecoration: task.isCompleted ? 'line-through' : 'none',
        color: task.isCompleted ? 'green' : 'blue',
        margin: '8px 0',
      }}
    >
      {task.title}
    </li>
  );
};

interface TaskBoardProps {
  tasks: Task[];
}

export const TaskBoard: React.FC<TaskBoardProps> = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p style={{ color: 'red', fontStyle: 'italic' }}>Задач нет</p>;
  }

  return (
    <div style={{ padding: '16px', border: '1px solid black', borderRadius: '8px', maxWidth: '400px' }}>
      <h2>Список задач</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};
