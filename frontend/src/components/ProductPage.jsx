import Size from './Size';
import "../styles/HookPage.css";
import PropTypes from "prop-types";
import { useState } from 'react';
import { useNavigate } from 'react-router';

const ProductPage = ({curPost, cartData, setCartData}) => {

    const url = "http://127.0.0.1:8000";
    
    const navigate = useNavigate();
    
    const [siz, setSiz] = useState(0);
    
    const addToCart = () => {
        curPost.size = siz;
        setCartData([...cartData, curPost]);
        if (cartData == []) {
            addToCart();
        } else {
            if(siz == 0) {
                window.alert("Select your shoe size");
            } else {
                navigate("/cart/");
                setSiz(0);
                return;
            }
        }
    }

    return (
        <>
            {curPost ? 
                <div className='flex flex-col justify-center align-middle'>
                    <div className='flex flex-col lg:flex-row justify-center align-middle lg:mt-16 p-4'>
                        <div className='m-4 mr-12'>
                            <div className=''>
                                <p className='text-2xl font-normal lg:text-3xl'>{curPost.name}</p>
                                <p className='text-sm lg:text-lg font-light'>{curPost.desc}</p>
                                <p className='font-bold text-sm lg:text-lg'>MRP: &#8377;{curPost.price}</p>
                                <p className='text-sm lg:text-lg font-light'>Inclusive of all taxes</p>
                            </div>
                            <div className='hidden lg:block mt-8 flex-col justify-center items-start'>
                                <p className='text-xl'>Select size</p>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    {[...Array(7)].map((i, j) => {
                                        return (
                                            <Size size={j+6} siz={siz} setSiz={setSiz} key={j}/>
                                        )
                                    })}
                                </div>
                            </div>
                            <button onClick={addToCart} className='hidden lg:block text-center p-4 bg-black text-white w-full mt-8 border rounded-full cursor-pointer comming hover:bg-white hover:text-black hover:border-black'>Add to Cart</button>
                        </div>
                        <img src={url + curPost.link} alt='shoe' className='m-4 lg:w-96 lg:h-fit'/>
                        <div className='lg:hidden mt-4 flex flex-col justify-center items-middle m-4'>
                            <p className='text-xl'>Select size</p>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {[...Array(7)].map((i, j) => {
                                        return (
                                            <Size size={j+6} siz={siz} setSiz={setSiz} key={j}/>
                                        )
                                })}
                            </div>
                            <button onClick={addToCart} className='lg:hidden text-center p-4 bg-black text-white w-full mt-8 border rounded-full cursor-pointer comming hover:bg-white hover:text-black hover:border-black'>Add to Cart</button>
                        </div>
                    </div>
                </div> : <h1 className='text-center text-5xl mt-16 comming'>Not Found</h1>
            }        
        </>
        
        
    )
}

ProductPage.propTypes = {
    curPost: PropTypes.object,
    setCartData: PropTypes.func,
    cartData: PropTypes.array,
}

export default ProductPage