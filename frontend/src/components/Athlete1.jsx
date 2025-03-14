import "../styles/Header.css"
import pic from "../assets/atheletes/ronaldo.png"

const Athlete1 = () => {
    return (
        <a className='flex flex-col justify-center items-start' target="_blank" rel="relation_name" href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwqigxKzRg9BJMLsosLslMzMtXKMrPS8xJyQcAkaUKOw&q=cristiano+ronaldo&rlz=1C5GCEA_enIN1152IN1152&oq=cristi&gs_lcrp=EgZjaHJvbWUqDwgBEC4YQxixAxiABBiKBTISCAAQABhDGOMCGLEDGIAEGIoFMg8IARAuGEMYsQMYgAQYigUyCggCEC4YsQMYgAQyBggDEEUYOTIKCAQQABixAxiABDIKCAUQABixAxiABDIKCAYQABixAxiABDIKCAcQLhixAxiABDIKCAgQLhixAxiABDIKCAkQABixAxiABNIBCDI2NzNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">
            <img src={pic} alt="shoe1" className='w-40 lg:w-96'/>
            <p className='text-sm font-semibold lg:text-2xl mt-2'>Cristiano Ronaldo</p>
            <p className='text-sm lg:text-lg'>Football Legend</p>
            <p className='font-bold text-sm lg:text-lg'></p>
        </a>
    )
}

export default Athlete1