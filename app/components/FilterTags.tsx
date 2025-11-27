import { useEffect, useState } from 'react'
import Tags from './Tags'
import { NotesProps } from '../types'

type FilterTagsProps = {
    notes: NotesProps[]
    selectedTags: string[]
    setSelectedTags: (val: string) => void;
}

function getUniqueTags(prev: string[]): string[] {
    const insertAll = ["All"]
    if (prev.length > 0) return [...new Set([...insertAll, ...prev])]

    return []
}

function FilterTags({ notes, selectedTags, setSelectedTags }: FilterTagsProps) {
    const [allUnique, setAllUniqueTags] = useState<string[]>([]);

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
                    setSelectedTags={val => setSelectedTags(val)}
                />)}
        </div>
    )
}

export default FilterTags