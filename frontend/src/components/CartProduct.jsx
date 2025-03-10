import "../styles/Header.css"
import PropTypes from "prop-types";
import { useNavigate } from "react-router";


const CartProduct = ({id, name, desc, price, link, size, setCurPost}) => {
    
    const url = "http://127.0.0.1:8000";
    
    const navigate = useNavigate();
    
    const getCurPost = () => {
        setCurPost({id, name, desc, price, link});
        navigate("/product/");
    };
    
    return (
        <div onClick={() => getCurPost()} className="cursor-pointer">
            <div className='flex flex-col justify-center items-start'>
                <img src={url + link} alt="shoe1" className='w-72 lg:w-96'/>
                <p className='text-sm font-semibold lg:text-2xl mt-2'>{name}</p>
                <p className='text-sm lg:text-lg'>{desc}</p>
                <p className='font-bold text-sm lg:text-lg'>Price: {price}</p>
                <p className='font-light text-sm lg:text-lg'>Size: {size}</p>
            </div>
        </div>
    )
}

CartProduct.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.number,
    link: PropTypes.string,
    id: PropTypes.number,
    setCurPost: PropTypes.func,
};

export default CartProduct