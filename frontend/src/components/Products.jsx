import Product from './Product';
import Athlete1 from './Athlete1';
import Athlete2 from './Athlete2';
import Athlete3 from './Athlete3';
import "../styles/HookPage.css";
import PropTypes from 'prop-types';

const Products = ({data, setCurPost, setCartData}) => {

    return (
        <div className='flex flex-col justify-center items-center mt-12 lg:mt-20 mb-12'>
            <div className='flex flex-col justify-left items-left mt-12 lg:mt-20'>
                <h1 className='text-2xl font-semibold font-sans lg:text-4xl mb-8 lg:mb-12 border-b border-black border-opacity-20 pb-4'>Trending Now</h1>
                <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-12'>
                    {data.map((d) => {
                        if (d.type == "trending") {
                            return (
                                <Product key={d.id} id={d.id} name={d.name} desc={d.desc} price={d.price} link={d.link} setCurPost={setCurPost} setCartData={setCartData}/>
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className='flex flex-col justify-left items-left mt-12 lg:mt-20'>
                <h1 className='text-2xl font-semibold font-sans lg:text-4xl mb-8 lg:mb-12 border-b border-black border-opacity-20 pb-4'>Limited Edition</h1>
                <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-12'>
                {data.map((d) => {
                    if (d.type == "limited") {
                        return (
                            <Product key={d.id} id={d.id} name={d.name} desc={d.desc} price={d.price} link={d.link} setCurPost={setCurPost}/>
                        )
                    }
                    return null;
                    })}
                </div>
            </div>
            <div className='flex flex-col justify-left items-left mt-12 lg:mt-20'>
                <h1 className='text-2xl font-semibold font-sans lg:text-4xl mb-8 lg:mb-12 border-b border-black border-opacity-20 pb-4'>Endorsed By</h1>
                <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-12'>
                    <Athlete1/>
                    <Athlete2/>
                    <Athlete3/>
                </div>
            </div>
        </div>
    )
}
Products.propTypes = {
    data: PropTypes.array,
    setCurPost: PropTypes.func,
    setCartData: PropTypes.func,
};

export default Products;