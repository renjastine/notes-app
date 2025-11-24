'use client';

import { useEffect, useState } from "react";
import DropdownSort from "./components/DropdownSort";
import FilterTags from "./components/FilterTags";
import AddNote from "./components/NewNote";
import Note from "./components/Note";
import SearchBar from "./components/SearchBar";
import { dummyData } from "./data";
import { NotesProps } from "./types";


export default function Home() {
  const [notes, setNotes] = useState<NotesProps[]>([]);

  useEffect(() => {
    // localStorage.setItem("notes", JSON.stringify(dummyData))
    const stored = localStorage.getItem("notes")
    // console.log(stored && stored?.length > 2 ? `May laman: ${stored}` : `Walang laman ${stored}`)
    setNotes(stored && stored?.length > 2 ? JSON.parse(stored) : []);
  }, [])

  return (
    <div className="flex justify-center">
      <main className="p-3 flex flex-col gap-2 w-full max-w-[960px]">
        <header className="text-xl font-regular text-center py-5 select-none">Notes</header>
        <SearchBar />
        <div className="flex justify-between">
          <DropdownSort />
          <AddNote />
        </div>
        <div className="flex gap-2">
          Filter:
          <FilterTags />
        </div>
        <div className="flex flex-col gap-4 max-h-[65vh] overflow-y-auto p-1">
          {
            notes.map((note, i) => <Note key={i} content={note.content} tag={note.tag} createdAt={note.createdAt} />)
          }
          {/* <Note />
          <Note />
          <Note /> */}
        </div>
      </main>
    </div>
  );
}
