"use client";

import { useFormInput } from "@/hooks/useFormInput";

const colors = [
  { name: 'blue', bg: 'bg-blue-500', text: 'text-blue-500', light: 'bg-blue-50' },
  { name: 'purple', bg: 'bg-purple-500', text: 'text-purple-500', light: 'bg-purple-50' },
  { name: 'pink', bg: 'bg-pink-500', text: 'text-pink-500', light: 'bg-pink-50' },
  { name: 'green', bg: 'bg-green-500', text: 'text-green-500', light: 'bg-green-50' },
  { name: 'orange', bg: 'bg-orange-500', text: 'text-orange-500', light: 'bg-orange-50' },
];

export default function CreateListForm({ onAdd }) {
  const name = useFormInput("");
  const description = useFormInput("");
  const color = useFormInput(colors[0].name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.value.trim()) {
      onAdd({
        name: name.value,
        description: description.value,
        color: color.value
      });
      name.reset();
      description.reset();
      color.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8 bg-gray-50 p-6 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Liste navn
        </label>
        <input
          value={name.value}
          onChange={name.onChange}
          placeholder="Navn på liste"
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Beskrivelse
        </label>
        <input
          value={description.value}
          onChange={description.onChange}
          placeholder="Beskrivelse"
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Vælg farve
        </label>
        <div className="flex gap-2">
          {colors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => color.onChange({ target: { value: c.name } })}
              className={`w-8 h-8 rounded-full ${c.bg} ${
                color.value === c.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
              }`}
            />
          ))}
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Opret liste
      </button>
    </form>
  );
}
