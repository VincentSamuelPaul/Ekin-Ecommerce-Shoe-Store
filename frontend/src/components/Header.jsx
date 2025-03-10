import "../styles/Header.css";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-row justify-between align-middle header'>
            <div className='hidden lg:block'></div>
            <div className='flex flex-row justify-center align-middle ml-2 lg:ml-20 cursor-pointer' onClick={() => navigate("/")}>
                <svg aria-hidden="true" className="swoosh-svg" transform="scale(-1, -1)" focusable="false" viewBox="0 0 24 24" role="img" width="102px" height="102px" fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
                <h1 className='text-4xl mt-8'>EKIN</h1>
            </div>
            <div className='flex flex-row justify-evenly align-middle mt-6'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" onClick={() => navigate("/cart")} fill="currentColor" className="bi bi-bag m-4 mr-12 cursor-pointer" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" onClick={() => navigate("/account")} fill="currentColor" className="bi bi-person mt-3 mr-8 cursor-pointer" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-check" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                </svg> */}
            </div>
        </div>
    )
}

export default Header;