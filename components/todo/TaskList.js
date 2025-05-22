import { getPriorityStyle } from '@/utils/styles';

export default function TaskList({ tasks, toggleDone, removeTask }) {
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { vigtigst: 0, høj: 1, mellem: 2, lav: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <ul className="space-y-4">
      {sortedTasks.map(task => {
        const priorityStyle = getPriorityStyle(task.priority);
        return (
          <li key={task.id} 
              className={`rounded-lg p-4 flex justify-between items-center transition-all duration-200 
                        ${priorityStyle.container} ${priorityStyle.border}`}>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`${priorityStyle.text} text-lg`}>{priorityStyle.icon}</span>
                <p className={`text-lg ${task.done ? 'text-gray-400 line-through' : priorityStyle.text}`}>
                  {task.name}
                </p>
              </div>
              <p className="text-sm opacity-75 mt-1 ml-6">Deadline: {task.deadline || 'Ingen deadline'}</p>
            </div>
            <div className="flex items-center gap-4">
              <input 
                type="checkbox" 
                checked={task.done} 
                onChange={() => toggleDone(task.id)} 
                className="w-6 h-6 rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
              />
              <button 
                onClick={() => removeTask(task.id)} 
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                ✕
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
