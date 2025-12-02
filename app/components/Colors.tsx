import { ColorProps } from '../types'
import ColorButton from './ColorButton'

const COLORS = ["red", "orange", "yellow", "green", "cyan", "blue", "fuchsia", "gray", "violet"]

function Colors({ selectedColor, setSelectedColor }: ColorProps) {

    return (
        <div>
            <h1 className='text-md mb-2'>Colors</h1>
            <div className="flex flex-wrap gap-2">
                {COLORS.map((color) => (
                    <ColorButton
                        key={color}
                        color={color}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                    />
                ))}
            </div>
        </div>
    )
}

export default Colors