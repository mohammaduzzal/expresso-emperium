import headBg from '../assets/3.png'
const Header = () => {
    return (
        <div
        className="hero h-[400px]"
        style={{
          backgroundImage: `url(${headBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center md:text-left  flex justify-center items-center">
          <div className="max-w-md lg:ml-56 lg:mt-28">
            <h1 className="mb-5 text-xl font-semibold  font-rancho">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5 font-raleway">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="btn bg-transparent hover:bg-[#E3B577] hover:text-black text-white font-rancho">Learn More</button>
          </div>
        </div>
      </div>
    );
};

export default Header;