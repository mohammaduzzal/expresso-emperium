import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableUsers from "../components/TableUsers";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users,setUsers] = useState(loadedUsers)
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
                            index={index} // Passing the index for dynamic numbering
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Users;