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

    // return (
    //     <div className="flex justify-center items-center min-h-screen  p-6">
    //     <form 
    //       onSubmit={handleSubmit} 
    //       className="bg-white shadow-2xl rounded p-8 w-full max-w-[60%] space-y-5 border border-gray-300"
    //     >
    //       <h1 className=" font-bold text-center text-gray-800 mb-4">Update Employee</h1>
          
    //       <input type="text" name="name" placeholder="Name" value={updatedData.name} onChange={handleChange} required 
    //         className="w-full px-5 py-3 border rounded shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
    //       <input type="number" name="age" placeholder="Age" value={updatedData.age} onChange={handleChange} required 
    //         className="w-full px-5 py-3 border rounded shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
    //       <input type="text" name="designation" placeholder="Designation" value={updatedData.designation} onChange={handleChange} required 
    //         className="w-full px-5 py-3 border rounded shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
    //       <input type="text" name="department" placeholder="Department" value={updatedData.department} onChange={handleChange} required 
    //         className="w-full px-5 py-3 border rounded shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
    //       <input type="email" name="email" placeholder="Email" value={updatedData.email} onChange={handleChange} required 
    //         className="w-full px-5 py-3 border rounded  shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
    //       <input type="text" name="profile_image" placeholder="Profile Image URL" value={updatedData.profile_image} onChange={handleChange} required 
    //         className="w-full px-5 py-3 border rounded  shadow-md focus:outline-none focus:ring-1 focus:ring-black-100" />
          
    //       <button type="submit" 
    //         className=" w-50 text-white py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
    //          Update Employee
    //       </button>
    //     </form>
    //   </div>
    // );
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
            Update Employee
          </h1>
          <p className="text-center text-sm text-gray-600 mb-8">
            Fill in the details to update employee information
          </p>
        </div>
    
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded sm:px-10">
            <form onSubmit={handleSubmit} className="mb-0 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={updatedData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
    
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="28"
                    value={updatedData.age}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
    
                <div>
                  <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
                    Designation
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    placeholder="Software Engineer"
                    value={updatedData.designation}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
    
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    placeholder="Engineering"
                    value={updatedData.department}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
    
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={updatedData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
    
                <div>
                  <label htmlFor="profile_image" className="block text-sm font-medium text-gray-700">
                    Profile Image URL
                  </label>
                  <input
                    type="text"
                    id="profile_image"
                    name="profile_image"
                    placeholder="https://example.com/profile.jpg"
                    value={updatedData.profile_image}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
    
              <div>
                <button onClick={()=>alert("updated successfully")}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  Update Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );

  }

export default UpdateEmployee;