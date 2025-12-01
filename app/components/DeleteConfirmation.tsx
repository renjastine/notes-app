import { Notes } from "../types"

type DeleteConfirmationProps = {
    deleteById: number
    setIsDeleteOpen: (val: boolean) => void
    notes: Notes[]
    setNotes: (val: Notes[]) => void
}

function DeleteConfirmation({ deleteById, setIsDeleteOpen, notes, setNotes }: DeleteConfirmationProps) {
    const handleClickCancel = () => {
        setIsDeleteOpen(false);
    }

    const handleClickDelete = () => {
        const copyNotes = [...notes]
        const deleteNote = copyNotes.filter(note => note.id !== deleteById)
        setNotes(deleteNote)
        // localStorage.setItem("notes", JSON.stringify(deleteNote))
        setIsDeleteOpen(false)
    }

    return (
        <div className="fixed border w-full h-full bg-black/50 flex justify-center items-center">
            <div className="bg-white w-[95%] max-w-[610px] rounded-md py-7 px-5 flex flex-col gap-4 ">
                <h1 className="font-bold text-lg">Delete Note</h1>
                <p className="text-black/50">Are you sure you want to delete this note? This action cannot be undone.</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end ">
                    <button
                        onClick={handleClickDelete}
                        className="bg-red-400 text-white py-2 rounded-md sm:w-20 cursor-pointer"
                    >
                        Delete
                    </button>
                    <button
                        onClick={handleClickCancel}
                        className="border rounded-md py-2 sm:w-20 cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmation