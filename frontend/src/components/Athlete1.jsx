import "../styles/Header.css"
import pic from "../assets/atheletes/ronaldo.png"

const Athlete1 = () => {
    return (
        <div className='flex flex-col justify-center items-start'>
            <img src={pic} alt="shoe1" className='w-40 lg:w-96'/>
            <p className='text-sm font-semibold lg:text-2xl mt-2'>Cristiano Ronaldo</p>
            <p className='text-sm lg:text-lg'>Football Legend</p>
            <p className='font-bold text-sm lg:text-lg'></p>
        </div>
    )
}

export default Athlete1