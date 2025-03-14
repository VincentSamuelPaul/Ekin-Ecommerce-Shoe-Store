
import hook from "../assets/hook.jpg"
import "../styles/HookPage.css"

const HookPage = () => {
    return (
        <>
            <div className='flex flex-row justify-center align-middle mt-12'>
                <img src={hook} alt='hook' className='' width="80%" height="100%"/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-center mt-8 text-4xl lg:text-8xl font-bold comming'>COMMING SOON.</h1>
                <h3 className='text-center mt-2 text-l italic'>This March.</h3>
                <button className=' text-white text-center bg-black p-2 pl-3 pr-3 mt-2 rounded-full comming'>Notify me.</button>
            </div>
        </>
    )
}

export default HookPage