import React, { useEffect, useState } from 'react'
import Tags from './Tags'
import { NotesProps } from '../types'
import { setDefaultAutoSelectFamily } from 'net'

type FilterTagsProps = {
    notes: NotesProps[]
}

const emptyData: NotesProps[] = [
    {
        content: "",
        tags: [],
        createdAt: ""
    }
]

function getUniqueTags(prev: string[]): string[] {
    const insertAll = ["All"]
    if (prev.length > 0) return [...new Set([...insertAll, ...prev])]

    return []
}

function FilterTags({ notes }: FilterTagsProps) {
    const [allUnique, setAllUniqueTags] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>(["All"]);

    function toggleTagSelection(tag: string) {
        setSelectedTags(prev => {
            if(tag === "All") return ["All"]

            if (prev.includes(tag)) {
                return prev.filter(t => t !== tag)
            } else {
                return [...prev.filter(t => t !== "All"), tag]
            }
        })
    }

    useEffect(() => {
        const notesTags = notes.flatMap(note => note.tags)
        setAllUniqueTags(getUniqueTags(notesTags))
    }, [notes])

    return (
        <div className='flex flex-wrap gap-1'>
            {allUnique.map(tag =>
                <Tags
                    key={tag}
                    tag={tag}
                    clickable={true}
                    selectedTags={selectedTags}
                    setSelectedTags={val => toggleTagSelection(val)}
                />)}
        </div>
    )
}

export default FilterTags