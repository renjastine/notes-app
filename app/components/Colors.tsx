import ColorButton from './ColorButton'

type ColorProps = {
    selectedColor: string
    setSelectedColor: (val: string) => void
}

function Colors({ selectedColor, setSelectedColor }: ColorProps) {
    const colors = ["red", "orange", "yellow", "green", "cyan", "blue", "fuchsia", "gray", "violet"]

    return (
        <div className="">
            <h1 className='text-md'>Colors</h1>
            <div className="flex flex-wrap gap-2">
                {colors.map((c, i) =>
                    <ColorButton
                        key={i}
                        color={c}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                    />)}

            </div>
        </div>
    )
}

export default Colors