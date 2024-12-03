import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableUsers from "../components/TableUsers";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users,setUsers] = useState(loadedUsers)

    const handleUserDelete = id =>{
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

                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                })
             
            }
          });

    }


    return (
        <div className="w-11/12 mx-auto my-10">
        <h2>Users: {users.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* Table Head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Login At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                    {users.map((user, index) => (
                        <TableUsers
                            key={user._id}
                            user={user}
                            index={index}
                            handleUserDelete={handleUserDelete} // Passing the index for dynamic numbering
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Users;