import { FormEvent, useState } from 'react'
import Colors from './Colors'
import TextEditor from './TextEditor'
import InputTags from './InputTags'

function NoteView() {
    const [inputTags, setInputTags] = useState<string[]>([])
    const [tag, setTag] = useState<string>("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (tag.trim() !== "") {
            setInputTags(prev => [...new Set([...prev, tag])])
            setTag("")
        }
    }

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center py-5'>
            <div className="bg-white max-w-[700px] w-[90%] max-h-full overflow-y-auto rounded-md shadow-sm py-5 px-7 flex flex-col gap-5">
                <h1 className='text-xl'>View Note</h1>
                <Colors />
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
                        {inputTags
                            && inputTags.map(
                                (tag, i) =>
                                    <InputTags
                                        key={i}
                                        tag={tag}
                                        inputTags={inputTags}
                                        setInputTags={setInputTags}
                                    />)}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NoteView