import "../styles/HookPage.css"
import { useState, useEffect } from "react"
import CartProduct from "./CartProduct";
import PropTypes from "prop-types";


const Profile = ({setCurPost, username, setUsername, password, setPassword, user, setUser}) => {

    const [orders, setOrders] = useState([]);

    const login = async() => {
        const response = await fetch("https://ecommbackend-asaw.onrender.com/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}),
        });
        const res = await response.json();
        if(res.status === true) {
            setUser(res.name);
            localStorage.setItem("username", username);
        }else {
            window.alert("Wrong credentials.")
        }
    }

    const signup = async() => {
        const response = await fetch("https://ecommbackend-asaw.onrender.com/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}),
        });
        const res = await response.json();
        if(res.status === true) {
            setUser(res.name);
            localStorage.setItem("username", username);
        }else {
            window.alert("Wrong credentials.")
        }
    }

    useEffect(() => {
        const getOrders = async() => {
            const response = await fetch("https://ecommbackend-asaw.onrender.com/getorders", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: username}),
            });
            const res = await response.json();
            setOrders(res);
        }

        getOrders();
    }, [])

    return (
        <div className='mt-16 flex flex-col justify-evenly items-center pb-16 mb-96'>
            {user ? 
            <>
                <div className='flex flex-col lg:flex-row justify-center items-start'>
                    <div className=' w-full flex flex-col justify-center items-center lg:items-start lg:align-middle'>
                        <h1 className='text-4xl comming border-b border-black border-opacity-20 w-full text-center pb-4 capitalize'>Hi {user}</h1>
                    </div>
                </div>
                <div className="mt-12">
                    <h1 className="text-3xl">Your Orders</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mt-8 lg:mt-12'>
                    {orders?.map((d) => {
                        return (
                            <CartProduct key={d.id} id={d.id} name={d.name} desc={d.desc} price={d.price} link={d.link} size={d.size} setCurPost={setCurPost}/>
                        )
                    })}
                </div>
            </>
            : <div className="flex flex-col justify-center align-middle lg:w-2/12 h-5/12">
                <h1 className="text-2xl comming">Username: </h1>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="bg bg-gray-100 mt-4 border-black border rounded-md text-xl p-2 comming w-12/12 outline-none pl-3"></input>
                <h1 className="text-2xl comming mt-8">Password: </h1>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg bg-gray-100 mt-4 border-black border rounded-md text-xl p-2 comming w-12/12 outline-none pl-3"></input>
                <div className="flex flex-col lg:flex-row justify-evenly">
                    <button onClick={() => login()} className='text-sm text-center p-4 bg-black text-white lg:w-4/12 lg:mr-16 mt-8 border rounded-full cursor-pointer comming hover:bg-white hover:text-black hover:border-black'>Login</button>
                    <button onClick={() => signup()} className='text-sm text-center p-4 bg-black text-white lg:w-4/12 lg:mr-16 mt-8 border rounded-full cursor-pointer comming hover:bg-white hover:text-black hover:border-black'>Signup</button>
                </div>
                
            </div>}
        </div>
    )
}

Profile.propTypes = {
    setCurPost: PropTypes.func,
    username: PropTypes.string,
    setUsername: PropTypes.func,
    password: PropTypes.string,
    setPassword: PropTypes.func,
    user: PropTypes.string,
    setUser: PropTypes.func,
};

export default Profile