import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import Colors from './Colors'
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextEditor from './TextEditor'
import InputTags from './InputTags'
import { Notes } from '../types'

type NoteViewProps = {
    id: number
    notes: Notes[]
    setNotes: (val: Notes) => void
    setIsOpen: (val: boolean) => void
    setId: (val: number) => void
}

function NoteView({ id, notes, setNotes, setIsOpen, setId }: NoteViewProps) {
    const onEdit = id !== 0

    const [tag, setTag] = useState<string>("")
    let lastID = useRef(0)

    const [note, setNote] = useState<Notes>({
        id: 0,
        content: "",
        tags: [],
        createdAt: "",
        color: "red"
    })

    const editor = useEditor({
        extensions: [StarterKit],
        editorProps: {
            attributes: {
                class: "border border-black/20 rounded-b-md min-h-[300px] p-4 focus:outline-none",
            }
        },
        onUpdate: ({ editor }) => {
            setNote(prev => ({ ...prev, content: editor.getHTML() }))
        },
        shouldRerenderOnTransaction: true,
        immediatelyRender: false,
    })

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // months are 0-based
        const day = String(today.getDate()).padStart(2, "0");

        const hours = String(today.getHours()).padStart(2, "0");
        const minutes = String(today.getMinutes()).padStart(2, "0");
        const seconds = String(today.getSeconds()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        setNote(prev => ({ ...prev, createdAt: formattedDate }))
    }, [])

    useEffect(() => {
        const [takeNote] = [...notes].filter(note => note.id === id)
        setNote(takeNote)
    }, [id])

    useEffect(() => {
        lastID.current = notes.length === 0 ? 1
            : [...notes]
                .map(note => note.id)
                .sort((a, b) => b - a)[0] + 1
        setNote(prev => ({ ...prev, id: lastID.current }))
    }, [notes])

    useEffect(() => {
        if (editor) {
            editor.commands.setContent(onEdit ? note.content : "");
        }
    }, [onEdit, editor]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (tag.trim() !== "") {
            setNote(prev => ({
                ...prev,
                tags: [...new Set([...prev.tags, tag.toLowerCase()])]
            }))
            setTag("")
        }
    }

    const handleSave = () => {
        if (onEdit) {
            editNote()
        } else {
            setNotes(note)
            setIsOpen(false)
        }
    }

    const editNote = () => {
        const index = notes.findIndex(n => n.id === id)
        if (id !== -1) {
            const [removed] = notes.splice(index, 1)
            setNotes({
                ...removed,
                content: note.content,
                tags: note.tags,
                color: note.color,
            })
            setIsOpen(false)
            setId(0)
        }
    }

    const handleCancel = () => {
        setIsOpen(false)
        setId(0)
    }

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center py-5'>
            <div className="bg-white max-w-[700px] w-[90%] max-h-full overflow-y-auto rounded-md shadow-sm py-5 px-4 flex flex-col gap-5">
                <h1 className='text-xl'>View Note</h1>
                <Colors
                    selectedColor={note.color}
                    setSelectedColor={val => setNote(prev => ({ ...prev, color: val }))}
                />
                {editor ? <TextEditor editor={editor} /> : null}
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-2"
                >
                    <h1 className='text-sm'>Tags</h1>
                    <input
                        id='tags'
                        value={tag}
                        onChange={e => setTag(e.target.value)}
                        className='bg-gray-200 rounded-md w-full h-8 text-sm px-2 focus:outline-none'
                        placeholder='Type a tag and press Enter'
                        type="text"
                    />
                    <div className="flex flex-wrap gap-2">
                        {note.tags
                            && note.tags.map((tag, i) =>
                                <InputTags
                                    key={i}
                                    tag={tag}
                                    inputTags={note.tags}
                                    setInputTags={val => setNote(prev => ({ ...prev, tags: val }))}
                                />)}
                    </div>
                </form>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={handleCancel}
                        className='border border-black/20 py-1 px-2 rounded-lg select-none cursor-pointer'
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className='border py-1 px-2 rounded-lg text-white bg-black hover:bg-black/80 select-none cursor-pointer'
                    >
                        Save Note
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NoteView