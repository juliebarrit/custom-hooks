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
  const { tasks, addTask, toggleDone, removeTask } = useTodoTasks(id);
  const { lists } = useTodoLists();
  
  const currentList = lists.find(list => list.id === id);
  const listName = currentList?.name || 'Opgaver';
  const listColor = currentList?.color || 'blue';
  
  useDocumentTitle(`${listName} - ${tasks.length} opgaver`);

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
