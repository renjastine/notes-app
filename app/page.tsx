import AddNote from "./components/NewNote";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="">
      <main className="px-3">
        <header className="text-xl font-regular text-center py-5">Notes</header>
        <div className="flex justify-end gap-2">
          <SearchBar />
          <AddNote />
        </div>
      </main>
    </div>
  );
}
