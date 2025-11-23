import DropdownSort from "./components/DropdownSort";
import AddNote from "./components/NewNote";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="px-3 flex flex-col gap-2 w-full max-w-[960px]">
        <header className="text-xl font-regular text-center py-5 select-none">Notes</header>
        <div className="flex justify-end gap-2">
          <SearchBar />
          <AddNote />
        </div>
        <DropdownSort />
      </main>
    </div>
  );
}
