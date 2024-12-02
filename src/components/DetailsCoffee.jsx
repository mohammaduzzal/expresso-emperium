import { useLoaderData } from "react-router-dom";

const DetailsCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, chef, details, photo } = coffee;
    return (
        <div className="min-h-screen flex items-center justify-center">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={photo}
                            className=" rounded-lg" />
                        <div>
                            <h2 className="font-rancho font-bold">Name :{name}</h2>
                            <p className="font-raleway">
                                Chef : {chef}
                            </p>
                            <p className="font-raleway">
                                Details : {details}
                            </p>

                        </div>
                     
                    </div>
                </div>
        </div>
    );
};

export default DetailsCoffee;