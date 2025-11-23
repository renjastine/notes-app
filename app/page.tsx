import DropdownSort from "./components/DropdownSort";
import FilterTags from "./components/FilterTags";
import AddNote from "./components/NewNote";
import Note from "./components/Note";
import SearchBar from "./components/SearchBar";

export default function Home() {
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
          <Note />
          <Note />
          <Note />
        </div>
      </main>
    </div>
  );
}
