import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../redux/action";

function UpdateEmployee() {
    const {id} = useParams()
    
    const { post } = useSelector((state) => state);
    // console.log(post);
    
    const employee = post?.filter(([Eid]) => Eid === id)[0]


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
        <div className="flex justify-center items-center min-h-screen  p-6">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-2xl rounded p-8 w-full max-w-[60%] space-y-5 border border-gray-300"
        >
          <h1 className=" font-bold text-center text-gray-800 mb-4">Update Employee</h1>
          
          <input type="text" name="name" placeholder="Name" value={updatedData.name} onChange={handleChange} required 
            className="w-full px-5 py-3 border rounded shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
          <input type="number" name="age" placeholder="Age" value={updatedData.age} onChange={handleChange} required 
            className="w-full px-5 py-3 border rounded shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
          <input type="text" name="designation" placeholder="Designation" value={updatedData.designation} onChange={handleChange} required 
            className="w-full px-5 py-3 border rounded shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
          <input type="text" name="department" placeholder="Department" value={updatedData.department} onChange={handleChange} required 
            className="w-full px-5 py-3 border rounded shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
          <input type="email" name="email" placeholder="Email" value={updatedData.email} onChange={handleChange} required 
            className="w-full px-5 py-3 border rounded  shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
          <input type="text" name="profile_image" placeholder="Profile Image URL" value={updatedData.profile_image} onChange={handleChange} required 
            className="w-full px-5 py-3 border rounded  shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
          <button type="submit" 
            className=" w-50 text-white py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
             Update Employee
          </button>
        </form>
      </div>
    );
}

export default UpdateEmployee;