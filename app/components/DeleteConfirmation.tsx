import { DeleteConfirmationProps } from "../types"

function DeleteConfirmation({
    deleteById,
    setIsDeleteOpen,
    notes,
    setNotes
}: DeleteConfirmationProps) {
    const handleCancel = () => setIsDeleteOpen(false);

    const handleDelete = () => {
        setNotes(notes.filter(note => note.id !== deleteById))
        setIsDeleteOpen(false)
    }

    const baseButtoClasses = "rounded-md py-2 cursor-pointer sm:w-20";
    const flexColumn = "flex flex-col";

    return (
        <div className="fixed border inset-0 bg-black/50 flex justify-center items-center">
            <div className={`${flexColumn} gap-4 bg-white w-[95%] max-w-[610px] rounded-md py-7 px-5`}>
                <h1 className="font-bold text-lg">Delete Note</h1>
                <p className="text-black/50">
                    Are you sure you want to delete this note? This action cannot be undone.
                </p>
                <div className={`${flexColumn} gap-3 sm:flex-row sm:justify-end`}>
                    <button onClick={handleDelete} className={`bg-red-400 text-white ${baseButtoClasses}`}>
                        Delete
                    </button>
                    <button onClick={handleCancel} className={`border ${baseButtoClasses}`}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmation