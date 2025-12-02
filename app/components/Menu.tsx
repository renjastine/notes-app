import { MenuProps } from "../types"

function Menu({ editor }: MenuProps) {
    const canUndo = editor.can().chain().undo().run()
    const canRedo = editor.can().chain().redo().run()

    const baseTextClasses = "w-7 rounded-sm cursor-pointer"
    const baseImageClasses = "flex justify-center w-7 rounded-sm h-6 cursor-pointer"

    const isActive = (format: string) => (editor.isActive(format) ? "isActive" : "");

    return (
        <div className='border border-b-0 border-black/20 rounded-t-md bg-gray-100 flex flex-wrap items-center py-2 gap-y-2 min-h-10'>
            <div className="flex justify-center gap-2 px-2 py-1 border-r border-black/20">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`${baseTextClasses} ${isActive('bold')}`}
                >
                    <strong>B</strong>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`${baseTextClasses} ${isActive('italic')}`}
                >
                    <em>I</em>
                </button>

                <button
                    className={`${baseTextClasses} ${isActive('underline')}`}
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                >
                    <u>U</u>
                </button>

                <button
                    className={`${baseTextClasses} ${isActive('strike')}`}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                >
                    <s>S</s>
                </button>

            </div>
            <div className="border-r border-black/20 flex justify-center gap-2 px-2">
                <button
                    className={`${baseImageClasses} ${isActive("bulletList")}`}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                >
                    <img className='w-4' src="bullet-list.svg" alt="bullet" />
                </button>
                <button
                    className={`${baseImageClasses} ${isActive("orderedList")}`}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                >
                    <img className='w-4' src="ordered-list.svg" alt="orderedList" />
                </button>
            </div>
            <div className="flex justify-center gap-2 px-2">
                <button
                    className={`${baseImageClasses}`}
                    onClick={() => editor.chain().focus().undo().run()}
                >
                    {canUndo
                        ? <img className='w-4' src="undo.svg" alt="undo" />
                        : <img className='w-4' src="undo-disabled.svg" alt="undoDisabled" />
                    }
                </button>
                <button
                    className={`${baseImageClasses}`}
                    onClick={() => editor.chain().focus().redo().run()}
                >
                    {canRedo
                        ? <img className='w-4' src="redo.svg" alt="redo" />
                        : <img className='w-4' src="redo-disabled.svg" alt="redoDisabled" />
                    }
                </button>
            </div>
        </div>
    )
}

export default Menu