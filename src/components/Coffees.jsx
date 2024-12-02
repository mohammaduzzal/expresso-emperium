import { Link } from "react-router-dom";

const Coffees = ({ coffee, handleDelete }) => {
    const { _id, name, chef, details, photo } = coffee;


    return (
        <div>

            <div>

                <div className="hero bg-base-200">
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
                        <div className="flex lg:flex-col">
                            <Link to={`/details/${_id}`}>
                            <button  className="btn bg-[#eb9a8a] text-white">Details</button>
                            </Link>

                            <Link to={`/updateCoffee/${_id}`}>
                                <button className="btn bg-[#66544f] text-white">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-red-300 text-white">X</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Coffees;