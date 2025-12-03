'use client';

import { useEffect, useMemo, useState } from "react";
import DropdownSort from "./components/DropdownSort";
import FilterTags from "./components/FilterTags";
import AddNote from "./components/NewNote";
import Note from "./components/Note";
import SearchBar from "./components/SearchBar";
import { Notes } from "./types";
import DeleteConfirmation from "./components/DeleteConfirmation";
import NoteView from "./components/NoteView";

export default function Home() {
  const [notes, setNotes] = useState<Notes[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>(["All"]);
  const [selectSort, setSelectSort] = useState("new");
  const [search, setSearch] = useState("");

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteById, setDeleteById] = useState<number>(0)

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0)

  const [isTagEmpty, setIsTagEmpty] = useState(false)
  const [isNotesEmpty, setIsNotesEmpty] = useState(false)


  // ---------- Tag Selection ----------
  function toggleTagSelection(tag: string) {
    setSelectedTags(prev => {
      if (tag === "All") return ["All"];

      const list = prev.filter(t => t !== "All");
      return prev.includes(tag)
        ? list.length > 1
          ? list.filter(t => t !== tag)
          : ["All"]
        : [...list, tag];
    });
  }

  // ---------- Filter + Search + Sort ----------
  const processedData = useMemo(() => {
    let result = selectedTags.includes("All")
      ? notes
      : notes.filter(note =>
        note.tags.some(tag => selectedTags.includes(tag))
      );

    if (search.trim() !== "") {
      const term = search.toLowerCase();
      result = result.filter(note =>
        note.content.toLowerCase().includes(term)
      );
    }

    return result.sort((a, b) =>
      selectSort === "new"
        ? b.createdAt.localeCompare(a.createdAt)
        : a.createdAt.localeCompare(b.createdAt)
    );

  }, [notes, selectedTags, selectSort, search]);

  // ---------- Load Notes ----------
  useEffect(() => {
    const stored = localStorage.getItem("notes")
    const parsed = stored ? JSON.parse(stored) : [];
    setNotes(Array.isArray(parsed) ? parsed : []);
  }, [])

  // ---------- Save Notes ----------
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    setIsTagEmpty(notes.flatMap(note => note.tags).length === 0);
    setIsNotesEmpty(notes.map(note => note.content).length === 0)
  }, [notes])

  // No Notes Yet
  const OnEmptyNotes = () => {
    return (
      <div className="text-center text-black/50">
        <p>Create your first note</p>
      </div>
    )
  }
  return (
    <div className="flex justify-center">
      <main className="p-3 flex flex-col gap-2 w-full max-w-[960px]">
        <header className="text-xl text-center py-5 select-none">Notes</header>

        {/* Sticky Bar */}
        <div className="sticky top-0 flex flex-col gap-3 bg-[#f9fafb] py-5">
          <SearchBar search={search} setSearch={setSearch} />

          <div className="flex justify-between">
            <DropdownSort selectSort={selectSort} setSelectSort={setSelectSort} />
            <AddNote setIsOpen={setIsOpen} />
          </div>

          <div className="flex gap-2">
            {!isTagEmpty && <span> Filter: </span>}
            <FilterTags
              notes={notes}
              selectedTags={selectedTags}
              setSelectedTags={toggleTagSelection}
            />
          </div>
        </div>

        {/* Note List */}
        <div className="flex flex-col gap-4  overflow-y-auto p-1">
          {isNotesEmpty
            ? OnEmptyNotes()
            : processedData.map((note, i) =>
              <Note
                key={i}
                id={note.id}
                content={note.content}
                tags={note.tags}
                color={note.color}
                createdAt={note.createdAt}
                setIsDeleteOpen={setIsDeleteOpen}
                setDeleteById={setDeleteById}
                setIsOpen={setIsOpen}
                setId={setId}
              />
            )}
        </div>
      </main>

      {/* Delete Confirmation */}
      {isDeleteOpen &&
        <DeleteConfirmation
          deleteById={deleteById}
          setIsDeleteOpen={setIsDeleteOpen}
          notes={notes}
          setNotes={setNotes}
        />}

      {/* View/Edit/Add */}
      {isOpen
        && <NoteView
          id={id}
          notes={notes}
          setNotes={val => setNotes(prev => [...prev, val])}
          setIsOpen={setIsOpen}
          setId={setId}
        />}
    </div>
  );
}
