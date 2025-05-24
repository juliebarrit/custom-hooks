"use client";

import Link from "next/link";
import { useTodoLists } from "@/hooks/useTodoLists";
import CreateListForm from "@/components/CreateListForm";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const getColorClasses = (colorName) => {
  const colorMap = {
    blue: { bg: 'from-blue-500', text: 'text-blue-500', hover: 'group-hover:text-blue-600', light: 'bg-blue-50' },
    purple: { bg: 'from-purple-500', text: 'text-purple-500', hover: 'group-hover:text-purple-600', light: 'bg-purple-50' },
    pink: { bg: 'from-pink-500', text: 'text-pink-500', hover: 'group-hover:text-pink-600', light: 'bg-pink-50' },
    green: { bg: 'from-green-500', text: 'text-green-500', hover: 'group-hover:text-green-600', light: 'bg-green-50' },
    orange: { bg: 'from-orange-500', text: 'text-orange-500', hover: 'group-hover:text-orange-600', light: 'bg-orange-50' },
  };
  return colorMap[colorName] || colorMap.blue;
};

export default function Home() {
  const { lists, addList, removeList } = useTodoLists();
  useDocumentTitle(`Du har ${lists.length} to-do lister`);

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-lg mb-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Mine to-do lister</h1>
        <p className="text-white/80">Du har {lists.length} to-do {lists.length === 1 ? "liste" : "lister"}.</p>
      </div>

      <CreateListForm onAdd={addList} />

      <div className="grid gap-4">
        {lists.map((list) => {
          const colors = getColorClasses(list.color);
          return (
            <div
              key={list.id}
              className={`${colors.light} relative border-none p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200`}
            >
              <Link href={`/todo/${list.id}`} className="block group cursor-pointer">
                <div className={`h-2 w-20 rounded mb-4 bg-gradient-to-r ${colors.bg} to-transparent`} />
                <h2 className={`text-xl font-semibold ${colors.text} ${colors.hover}`}>
                  {list.name}
                </h2>
                <p className="text-gray-600 mt-1">{list.description}</p>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  removeList(list.id);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}