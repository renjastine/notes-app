'use client';

import { useEffect, useMemo, useState } from "react";
import DropdownSort from "./components/DropdownSort";
import FilterTags from "./components/FilterTags";
import AddNote from "./components/NewNote";
import Note from "./components/Note";
import SearchBar from "./components/SearchBar";
// import { dummyData } from "./data";
import { NotesProps } from "./types";


export default function Home() {
  const [notes, setNotes] = useState<NotesProps[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>(["All"]);
  const [selectSort, setSelectSort] = useState("new");

  function toggleTagSelection(tag: string) {
    setSelectedTags(prev => {
      if (tag === "All") return ["All"]

      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag)
      } else {
        return [...prev.filter(t => t !== "All"), tag]
      }
    })
  }

  const processedData = useMemo(() => {
    let result =
      selectedTags.includes("All")
        ? [...notes]
        : [...notes].filter(note =>
          note.tags.some(tag => selectedTags.includes(tag))
        );

    return [...result].sort(
      (a, b) => selectSort === "new" ?
        b.createdAt.localeCompare(a.createdAt) :
        a.createdAt.localeCompare(b.createdAt))

  }, [notes, selectedTags, selectSort]);

  useEffect(() => {
    // localStorage.setItem("notes", JSON.stringify(dummyData))
    const stored = localStorage.getItem("notes")
    const parsed = stored ? JSON.parse(stored) : [];
    setNotes(Array.isArray(parsed) ? parsed : []);
  }, [])

  return (
    <div className="flex justify-center">
      <main className="p-3 flex flex-col gap-2 w-full max-w-[960px]">
        <header className="text-xl font-regular text-center py-5 select-none">Notes</header>
        <div className="sticky top-0 flex flex-col gap-3 bg-[#f9fafb] py-5">
          <SearchBar />
          <div className="flex justify-between">
            <DropdownSort
              selectSort={selectSort}
              setSelectSort={setSelectSort}
            />
            <AddNote />
          </div>
          <div className="flex gap-2">
            Filter:
            <FilterTags
              notes={notes}
              selectedTags={selectedTags}
              setSelectedTags={toggleTagSelection}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4  overflow-y-auto p-1">
          {processedData.map((note, i) =>
            <Note
              key={i}
              id={note.id}
              content={note.content}
              tags={note.tags}
              createdAt={note.createdAt}
            />)}
        </div>
      </main>
    </div>
  );
}
