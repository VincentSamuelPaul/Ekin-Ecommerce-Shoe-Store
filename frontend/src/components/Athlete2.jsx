import "../styles/Header.css"
import pic from "../assets/atheletes/kobe.png"

const Athlete2 = () => {
    return (
        <div className='flex flex-col justify-center items-start'>
            <img src={pic} alt="shoe1" className='w-40 lg:w-96'/>
            <p className='text-sm font-semibold lg:text-2xl mt-2'>Kobe Bryant</p>
            <p className='text-sm lg:text-lg'>NBA Lengend</p>
        </div>
    )
}

export default Athlete2