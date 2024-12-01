import one from '../assets/icons/Rectangle 9.png'
import two from '../assets/icons/Rectangle 10.png'
import three from '../assets/icons/Rectangle 11.png'
import four from '../assets/icons/Rectangle 12.png'
import five from '../assets/icons/Rectangle 13.png'
import six from '../assets/icons/Rectangle 14.png'
import seven from '../assets/icons/Rectangle 15.png'
import eight from '../assets/icons/Rectangle 16.png'

const Gallary = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center my-5'>
                <p className='text-[#331A15] font-raleway'>Follow Us Now</p>
                <h2 className='text-[#331A15] text-xl font-bold font-rancho'>Follow on Instagram</h2>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
            <img src={five} alt="" />
            <img src={six} alt="" />
            <img src={seven} alt="" />
            <img src={eight} alt="" />
        </div>
        </div>
    );
};

export default Gallary;