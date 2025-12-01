import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import Colors from './Colors'
import TextEditor from './TextEditor'
import InputTags from './InputTags'
import { Notes } from '../types'

type NoteViewProps = {
    notes: Notes[]
}

function NoteView({ notes }: NoteViewProps) {
    const [note, setNote] = useState<Notes>({
        id: 0,
        content: "",
        tags: [],
        createdAt: "",
        color: "red"
    })

    let lastID = useRef(0)
    const [tag, setTag] = useState<string>("")

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // months are 0-based
        const day = String(today.getDate()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}`;
        setNote(prev => ({ ...prev, createdAt: formattedDate }))
    }, [])

    useEffect(() => {
        lastID.current = [...notes]
            .map(note => note.id)
            .sort((a, b) => b - a)[0] + 1
        setNote(prev => ({ ...prev, id: lastID.current }))
    }, [notes])

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

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center py-5'>
            <div className="bg-white max-w-[700px] w-[90%] max-h-full overflow-y-auto rounded-md shadow-sm py-5 px-4 flex flex-col gap-5">
                <h1 className='text-xl'>View Note</h1>
                <Colors
                    selectedColor={note.color}
                    setSelectedColor={val => setNote(prev => ({ ...prev, color: val }))}
                />
                <TextEditor />
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
                            && note.tags.map(
                                (tag, i) =>
                                    <InputTags
                                        key={i}
                                        tag={tag}
                                        inputTags={note.tags}
                                        setInputTags={val => setNote(prev => ({ ...prev, tags: val }))}
                                    />)}
                    </div>
                </form>
                <div className="flex justify-end gap-2">
                    <button className='border border-black/20 py-1 px-2 rounded-lg select-none cursor-pointer'>Cancel</button>
                    <button className='border py-1 px-2 rounded-lg text-white bg-black hover:bg-black/80 select-none cursor-pointer'>Save Note</button>
                </div>
            </div>
        </div>
    )
}

export default NoteView