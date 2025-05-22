"use client";

import { useFormInput } from "@/hooks/useFormInput";

export default function CreateTaskForm({ onAdd }) {
  const name = useFormInput("");
  const deadline = useFormInput("");
  const priority = useFormInput("lav");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.value.trim()) {
      onAdd({
        name: name.value,
        deadline: deadline.value,
        priority: priority.value,
      });
      name.reset();
      deadline.reset();
      priority.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8 bg-gray-50 p-6 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Opgave navn</label>
        <input 
          value={name.value}
          onChange={name.onChange}
          placeholder="Indtast opgave navn" 
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
        <input 
          type="date" 
          value={deadline.value}
          onChange={deadline.onChange}
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Prioritet</label>
        <select 
          value={priority.value}
          onChange={priority.onChange}
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        >
          <option value="lav">Lav</option>
          <option value="mellem">Mellem</option>
          <option value="høj">Høj</option>
          <option value="vigtigst">Vigtigst</option>
        </select>
      </div>

      <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Tilføj opgave</button>
    </form>
  );
}
