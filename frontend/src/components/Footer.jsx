import "../styles/HookPage.css"

const Footer = () => {
    return (
        <div className='flex flex-row justify-evenly items-start bg-gray-100 bg-opacity-80 pt-16 pb-16 comming mt-56'>
            <div className='flex flex-col justify-left items-left'>
                <h1 className='text-lg lg:text-xl mb-4'>Resources</h1>
                <h1 className='font-light pb-2'>Share on Social Media</h1>
                <h1 className='font-light'>Feedback</h1>
            </div>
            <div className='flex flex-col justify-left items-left'>
                <h1 className='text-lg lg:text-xl mb-4'>Help</h1>
                <h1 className='font-light pb-2'>Orders</h1>
                <h1 className='font-light pb-2'>Signin</h1>
                <h1 className='font-light pb-2'>Contact Us</h1>
            </div>
            <div className='hidden lg:block flex-col justify-left items-left'>
                <h1 className='text-lg lg:text-xl mb-4'>Company</h1>
                <h1 className='font-light pb-2'>About Ekin</h1>
                <h1 className='font-light pb-2'>News</h1>
                <h1 className='font-light pb-2'>Report</h1>
            </div>
        </div>
    )
}

export default Footer