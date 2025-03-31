import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../redux/action";

function UpdateEmployee() {
    const {id} = useParams()
    
    const { post, loading, error } = useSelector((state) => state);
    // console.log(post);
    
    const employee = post?.filter(([Eid, data]) => Eid === id)[0]


console.log(employee);


 
    const dispatch = useDispatch();
    
    const [updatedData, setUpdatedData] = useState(employee[1]);

    const handleChange = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(employee[0], updatedData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Employee</h2>
            <input type="text" name="name" value={updatedData.name} onChange={handleChange} required />
            <input type="number" name="age" value={updatedData.age} onChange={handleChange} required />
            <input type="text" name="designation" value={updatedData.designation} onChange={handleChange} required />
            <input type="text" name="department" value={updatedData.department} onChange={handleChange} required />
            <input type="email" name="email" value={updatedData.email} onChange={handleChange} required />
            <input type="text" name="profile_image" value={updatedData.profile_image} onChange={handleChange} required />
            <button type="submit">Update Employee</button>
        </form>
    );
}

export default UpdateEmployee;