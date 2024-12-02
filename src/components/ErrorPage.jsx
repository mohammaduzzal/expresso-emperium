import error from '../assets/icons/404.gif'
const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;