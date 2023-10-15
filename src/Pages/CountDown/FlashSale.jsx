// import FlashSaleCountdown from './FlashSaleCountdown';
// import { useState } from 'react';
import flash from '../../img/flash-sale/c8fdb978-acd8-4e5b-9e04-374607ec6705.gif'
import Products from '../Products/Products';
import { Link,  useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FlashSale = () => {
  const [userShop, setUserShop] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop`)
          .then(res=>{
              setUserShop(res.data.payload)
          })

  }, [])
  const handleShopDetails =(slug)=>{
    navigate(`/shop/${slug}`)
  }
    return (
      <div className='bg-black pb-5 rounded-xl my-16'>
        {/* <h2>Set Flash Sale End Time:</h2> */}
        {/* <input type="datetime-local" value={userInput} onChange={handleUserInputChange} />
        <button onClick={handleSetTargetDate}>Set Target Date</button>
         */}
        
          <div className=''>
            <div>
                <img className='w-full rounded-xl' src={flash} alt="" />
            </div>
            {/* <h2>Flash Sale Ending In:</h2> */}
            {/* <FlashSaleCountdown targetDate={targetDate} /> */}
          </div>
        <div className='flex justify-between items-center px-5 my-5'>
            <p className='text-white text-xl'>Products</p>
            <Link to='/products'><button className='inline-block btn'>Show More</button></Link>
        </div>
        <Products></Products>
        <div className='flex justify-between items-center px-5 my-5'>
            <p className='text-white text-xl'>Companies</p>
            <Link to='/companies'><button className='inline-block btn'>Show More</button></Link>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {/* <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1"> */}
                {
                    userShop.map(data=> <div  key={data._id}><div className=" bg-white justify-start items-center w-40 h-48 p-2 rounded-2xl border-x-red border-y-orange m-auto border-2 my-2">
                        <img className="w-24 m-auto" src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${data.image}`} alt="Image Not Found" />
                        <div className="text-start">
                            <p onClick={()=>handleShopDetails(data.slug)} className="overflow-hidden text-center  hover:underline font-bold hover:text-blue cursor-pointer">{data.name.slice(0,18)}...</p>
                            <p className='bg-blue text-start inline-block px-1 rounded-lg bg-opacity-50 mt-2 tooltip'  data-tip="Cash On Delivery">COD</p>
                        </div>

                    </div>
                    </div>
                    ).slice(0,5)
                }
                {/* </Swiper> */}
        </div>
      </div>
    );
  };
  
  export default FlashSale;
