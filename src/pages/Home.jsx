import Feature from "../components/Feature";
import Gallary from "../components/Gallary";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-11/12 mx-auto my-20">
                <Feature></Feature>
                <Gallary></Gallary>
            </div>
        </div>
    );
};

export default Home;