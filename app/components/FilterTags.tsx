import { useEffect, useState } from 'react'
import Tags from './Tags'
import { FilterTagsProps } from '../types'

function getUniqueTags(tags: string[]): string[] {
    const defaultTag = ["All"]
    return tags.length ? [...new Set([...defaultTag, ...tags])] : []
}

function FilterTags({ notes, selectedTags, setSelectedTags }: FilterTagsProps) {
    const [uniqueTags, setUniqueTags] = useState<string[]>([]);

    useEffect(() => {
        const allTags = notes.flatMap(note => note.tags)
        setUniqueTags(getUniqueTags(allTags))
    }, [notes])

    return (
        <div className='flex flex-wrap gap-1'>
            {uniqueTags.map(tag => (
                <Tags
                    key={tag}
                    tag={tag}
                    clickable
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                />
            ))}
        </div>
    )
}

export default FilterTags