import "../styles/Header.css"
import pic from "../assets/atheletes/jordan.png"

const Athlete = () => {
    return (
        <div className='flex flex-col justify-center items-start'>
            <img src={pic} alt="shoe1" className='w-40 lg:w-96'/>
            <p className='text-sm font-semibold lg:text-2xl mt-2'>Micheal Jordan</p>
            <p className='text-sm lg:text-lg'>Basketball Legend</p>
        </div>
    )
}

export default Athlete