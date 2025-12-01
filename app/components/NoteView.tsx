import Colors from './Colors'
import TextEditor from './TextEditor'

function NoteView() {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center py-5'>
            <div className="bg-white max-w-[700px] w-[90%] max-h-full overflow-y-auto rounded-md shadow-sm py-5 px-7 flex flex-col gap-5">
                <h1 className='text-xl'>View Note</h1>
                <Colors />
                <TextEditor />
                
            </div>
        </div>
    )
}

export default NoteView