import CartProduct from "./CartProduct"
import PropTypes from "prop-types"

const Checkout = ({cartData, check}) => {
    console.log(cartData);
    console.log(check);
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mt-8 lg:mt-0'>
                {cartData.map((d) => {
                    return (
                        <CartProduct key={d.id} id={d.id} name={d.name} desc={d.desc} price={d.price} link={d.link} size={d.size}/>
                    )
                })}
            </div>
        </div>
    )
}

Checkout.propTypes = {
    cartData: PropTypes.array,
    check: PropTypes.array,
}

export default Checkout