import HookPage from './HookPage';
import Products from './Products';
import PropTypes from 'prop-types';

const MainPage = ({data, curPost, setCurPost, setCartData}) => {
  
  return (
    <div className='flex flex-col'>
        <HookPage/>
        <Products data={data} curPost={curPost} setCurPost={setCurPost} setCartData={setCartData}/>
    </div>
  )
}
MainPage.propTypes = {
  data: PropTypes.array,
  curPost: PropTypes.object,
  setCurPost: PropTypes.func,
  setCartData: PropTypes.func,
};

export default MainPage;