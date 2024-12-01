import one from '../assets/icons/1.png'
import two from '../assets/icons/2.png'
import three from '../assets/icons/3.png'
import four from '../assets/icons/4.png'
const Feature = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {/* one */}
        <div className="card card-compact bg-slate-200">
        <figure  className="flex justify-start">
          <img
            src={one}
            alt="" />
        </figure>
        <div className="flex flex-col justify-center items-center">
          <h2 className="card-title font-rancho">Awesome Aroma</h2>
          <p className='text-center font-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
          
        </div>
      </div>
            {/* two */}
        <div className="card card-compact bg-slate-200">
        <figure>
          <img
            src={two}
            alt="" />
        </figure>
        <div className="flex flex-col justify-center items-center">
          <h2 className="card-title font-rancho">High Quality</h2>
          <p className='text-center font-raleway'>We served the coffee to you maintaining the best quality</p>
          
        </div>
      </div>
            {/* three */}
        <div className="card card-compact bg-slate-200">
        <figure>
          <img
            src={three}
            alt="" />
        </figure>
        <div className="flex flex-col justify-center items-center">
          <h2 className="card-title font-rancho">Pure Grades</h2>
          <p className='text-center font-raleway'>The coffee is made of the green coffee beans which you will love</p>
          
        </div>
      </div>
            {/* four */}
        <div className="card  card-compact bg-slate-200">
        <figure>
          <img
            src={four}
            alt="" />
        </figure>
        <div className="flex flex-col justify-center items-center">
          <h2 className="card-title font-rancho">Proper Roasting</h2>
          <p className='text-center font-raleway'>Your coffee is brewed by first roasting the green coffee beans</p>
          
        </div>
      </div>
      </div>
    );
};

export default Feature;