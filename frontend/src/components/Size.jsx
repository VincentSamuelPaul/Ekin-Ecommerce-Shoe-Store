import PropTypes from "prop-types"

const Size = ({size, siz, setSiz}) => {

    const set = () => {
        setSiz(size);
    }
    return (
        <>
            {size == siz ? (
                <button onClick={() => set()} className='border border-black text-white bg-black p-2 pl-10 pr-10 lg:pl-16 lg:pr-16 border-opacity-10 rounded-md'>
                    UK {size}
                </button>
            ) : (
                <button onClick={() => set()} className='border border-black p-2 pl-10 pr-10 lg:pl-16 lg:pr-16 border-opacity-10 rounded-md'>
                    UK {size}
                </button>
            )}
        </>
    )
}

Size.propTypes = {
    size: PropTypes.number,
    siz: PropTypes.number,
    setSiz: PropTypes.func,
}

export default Size