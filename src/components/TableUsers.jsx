
const TableUsers = ({user,index,handleUserDelete}) => {
    const {_id,name,email,createdAt,lastSignInTime} = user;
    return (
        <tr className="hover" key={_id}>
        <th>{index + 1}</th> {/* Dynamic numbering */}
        <td>{name}</td>
        <td>{email}</td>
        <td>{createdAt}</td>
        <td>{lastSignInTime}</td> {/* Placeholder for Last Login */}
        <td>
            <button className="btn mr-1">Edit</button>
            <button onClick={() => handleUserDelete(_id)} className="btn">X</button>
        </td>
    </tr>
    );
};

export default TableUsers;