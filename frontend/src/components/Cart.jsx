import "../styles/HookPage.css"
import CartProduct from './CartProduct'
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const Cart = ({cartData, setCurPost, user, setCartData}) => {
    
    let total = 0;

    const navigate = useNavigate();

    const placeOrder = async() => {
        
        if(user == "") {
            window.alert("Login or signup first.")
            navigate("/account");
        } else {
            if (cartData == []) {
                window.alert("Cart is empty");
                return;
            }
            for(let i = 0; i < cartData.length; i++) {
                cartData[i].username = user;
            }
            console.log(cartData);
            const response = await fetch("https://ecommbackend-asaw.onrender.com/createorders", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartData)
            });
            const res = await response.json();
            console.log(res);
            navigate("/account");
        }
    }

    return (
        <>
            <div className='mt-16 lg:ml-12 flex flex-col justify-evenly items-center pb-16'>
                <div className='flex flex-col lg:flex-row justify-center items-start'>
                    <div className=' w-full flex flex-col justify-center items-center lg:items-start lg:align-middle'>
                        <h1 className='text-4xl comming border-b border-black border-opacity-20 w-10/12 text-center pb-4'>Your Cart</h1>
                        <button onClick={() => setCartData([])} className="text-sm text-center p-4 bg-black text-white w-10/12 lg:mr-16 mt-8 border rounded-full cursor-pointer comming hover:bg-white hover:text-black hover:border-black">Empty Cart</button>
                        <button onClick={() => placeOrder()} className='text-sm text-center p-4 bg-black text-white w-10/12 lg:mr-16 mt-8 border rounded-full cursor-pointer comming hover:bg-white hover:text-black hover:border-black'>Place order {cartData.length} items</button>
                        <h1 className='mt-4 font-light text-xl text-center'>
                            {cartData?.map((d) => {
                                total = total + d.price;
                                return null;
                            })}
                            Total: &#8377;{total}
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mt-8 lg:mt-0'>
                        {cartData?.map((d) => {
                            return (
                                <CartProduct key={d.id} id={d.id} name={d.name} desc={d.desc} price={d.price} link={d.link} size={d.size} setCurPost={setCurPost}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

Cart.propTypes = {
    cartData: PropTypes.array,
    check: PropTypes.array,
    setCurPost: PropTypes.func,
    setCartData: PropTypes.func,
    setCheck: PropTypes.func,
    user: PropTypes.string,
}

export default Cart