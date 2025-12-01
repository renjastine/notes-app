import { Editor } from '@tiptap/react'

function Menu({ editor }: { editor: Editor }) {
    const canUndo = editor.can().chain().undo().run()
    const canRedo = editor.can().chain().redo().run()

    return (
        <div className='border border-b-0 border-black/20 rounded-t-md bg-gray-100 flex flex-wrap items-center py-2 gap-y-2 min-h-10'>
            <div className="flex justify-center gap-2 px-2 py-1 border-r border-black/20">
                <button
                    className={`
                        w-7 rounded-sm cursor-pointer    
                        ${editor.isActive('bold') ? 'isActive' : ''}
                        `}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    <strong>B</strong>
                </button>
                <button
                    className={`
                        w-7 rounded-sm cursor-pointer    
                        ${editor.isActive('italic') ? 'isActive' : ''}
                        `}
                    onClick={() => editor.chain().focus().toggleItalic().run()}><em>I</em></button>
                <button
                    className={`
                        w-7 rounded-sm cursor-pointer    
                        ${editor.isActive('underline') ? 'isActive' : ''}
                        `}
                    onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></button>
                <button
                    className={`
                        w-7 rounded-sm cursor-pointer    
                        ${editor.isActive('strike') ? 'isActive' : ''}
                        `}
                    onClick={() => editor.chain().focus().toggleStrike().run()}><s>S</s></button>
            </div>
            <div className="border-r border-black/20 flex justify-center gap-2 px-2">
                <button
                    className={`flex justify-center w-7 rounded-sm h-6 cursor-pointer
                        ${editor.isActive('bulletList') ? 'isActive' : ''}
                        `}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                >
                    <img className='w-4' src="bullet-list.svg" alt="bullet" />
                </button>
                <button
                    className={`flex justify-center w-7 rounded-sm h-6 cursor-pointer
                        ${editor.isActive('orderedList') ? 'isActive' : ''}
                        `}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                >
                    <img className='w-4' src="ordered-list.svg" alt="orderedList" />
                </button>
            </div>
            <div className="flex justify-center gap-2 px-2">
                <button
                    className={`flex justify-center w-7 rounded-sm h-6 cursor-pointer
                        `}
                    onClick={() => editor.chain().focus().undo().run()}
                >
                    {canUndo
                        ? <img className='w-4' src="undo.svg" alt="undo" />
                        : <img className='w-4' src="undo-disabled.svg" alt="undoDisabled" />}
                </button>
                <button
                    className={`flex justify-center w-7 rounded-sm h-6 cursor-pointer
                        `}
                    onClick={() => editor.chain().focus().redo().run()}
                >
                    {canRedo
                        ? <img className='w-4' src="redo.svg" alt="redo" />
                        : <img className='w-4' src="redo-disabled.svg" alt="redoDisabled" />}
                </button>
            </div>
        </div>
    )
}

export default Menu