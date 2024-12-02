
const TableUsers = ({user,index}) => {
    const {_id,name,email,createdAt} = user;
    return (
        <tr className="hover" key={_id}>
        <th>{index + 1}</th> {/* Dynamic numbering */}
        <td>{name}</td>
        <td>{email}</td>
        <td>{createdAt}</td>
        <td>N/A</td> {/* Placeholder for Last Login */}
        <td>
            <button className="btn mr-1">Edit</button>
            <button className="btn">X</button>
        </td>
    </tr>
    );
};

export default TableUsers;