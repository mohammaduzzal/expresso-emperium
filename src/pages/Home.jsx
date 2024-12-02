import { useLoaderData } from "react-router-dom";
import Feature from "../components/Feature";
import Gallary from "../components/Gallary";
import Header from "../components/Header";
import { useState } from "react";
import Coffees from "../components/Coffees";
import Swal from "sweetalert2";

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DELETE"

                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== id)
                            setCoffees(remaining)
                        }
                       
                    })
               
            }
        });

    }
    return (
        <div>
            <Header></Header>
            <div className="w-11/12 mx-auto my-20">
                <Feature></Feature>
                <h2 className="text-center text-xl text-[#331A15] font-bold font-rancho my-5">coffees : {coffees.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {
                    coffees.map(coffee => <Coffees
                         key={coffee._id} 
                        coffee={coffee}
                        handleDelete={handleDelete}
                        ></Coffees>)
                }
                </div>
                <Gallary></Gallary>
            </div>
        </div>
    );
};

export default Home;