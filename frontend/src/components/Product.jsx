import "../styles/Header.css";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";

const Product = ({id, name, desc, price, link, setCurPost}) => {

    const navigate = useNavigate();

    const url = "http://127.0.0.1:8000";

    const getCurPost = () => {
        setCurPost({id, name, desc, price, link});
        navigate("/product/");
    };

    return (
        <div onClick={() => getCurPost()} className="cursor-pointer">
            <div className='flex flex-col justify-center items-start'>
                <img src={url + link} alt="shoe1" className='w-40 lg:w-96'/>
                <p className='text-sm font-semibold lg:text-2xl mt-2'>{name}</p>
                <p className='text-sm lg:text-lg'>{desc}</p>
                <p className='font-bold text-sm lg:text-lg'>MRP: &#8377;{price}</p>
            </div>
        </div>
    )
}
Product.propTypes = {
    id: PropTypes.number,
    dat: PropTypes.object,
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    link: PropTypes.string,
    setCurPost: PropTypes.func,
};


export default Product;