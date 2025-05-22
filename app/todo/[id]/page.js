"use client";

import { useParams } from "next/navigation";
import { useTodoTasks } from "@/hooks/useTodoTasks";
import { useTodoLists } from "@/hooks/useTodoLists";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import Header from "@/components/shared/Header";
import CreateTaskForm from "@/components/CreateTaskForm";
import TaskList from "@/components/todo/TaskList";

export default function TodoListPage() {
  const { id } = useParams();
  const { tasks, addTask, toggleDone, removeTask, isInitialized: tasksInitialized } = useTodoTasks(id);
  const { lists, isInitialized: listsInitialized } = useTodoLists();
  
  const currentList = lists.find(list => list.id === id);
  const listName = currentList?.name || 'Opgaver';
  const listColor = currentList?.color || 'blue';
  
  useDocumentTitle(`${listName} - ${tasks.length} opgaver`);

  if (!tasksInitialized || !listsInitialized) {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <div className="animate-pulse">
          <div className="h-32 bg-gray-200 rounded-lg mb-8"></div>
          <div className="h-64 bg-gray-100 rounded-lg"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <Header 
        title={listName}
        subtitle={`Du har ${tasks.length} opgave${tasks.length === 1 ? "" : "r"}.`}
        color={listColor}
      />
      <CreateTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} toggleDone={toggleDone} removeTask={removeTask} />
    </main>
  );
}
