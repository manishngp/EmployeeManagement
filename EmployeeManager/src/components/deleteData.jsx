import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees, deleteData } from "../redux/action";


function DeteteData(){

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(fetchEmployees());

  },[dispatch])

  const {post} = useSelector((state)=>state)
  console.log("from delete redux",post)
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {post.map((post) => (
        <div
          key={post[0]}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300"
        >
          {/* Card Header with Image */}
          <div className="relative">
            <img
              src={post[1].profile_image}
              alt={post[1].name}
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-0 right-0 m-2">
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                Delete Mode
              </span>
            </div>
          </div>
          
          {/* Card Content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{post[1].name}</h3>
            <p className="text-sm text-gray-600 mb-1">{post[1].designation}</p>
            <p className="text-sm text-gray-500 mb-1">{post[1].department}</p>
            <p className="text-sm text-gray-700 mb-1">{post[1].email}</p>
            <p className="text-sm text-gray-700 mb-3">{post[1].phone}</p>
            
            {/* Delete Actions */}
            {/* {confirmDelete === post[0] ? (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-red-600 font-medium mb-2">Are you sure you want to delete this employee?</p>
                <div className="flex gap-2">
                  <button
                    // onClick={() => handleConfirmDelete(post[0])}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                  >
                    Confirm Delete
                  </button>
                  <button
                    // onClick={handleCancelDelete}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : ( */}
              <button
                // onClick={() => handleDeleteClick(post[0])}
                className="w-full mt-2 bg-white border border-red-500 text-red-600 hover:bg-red-50 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Delete Employee
              </button>
            {/* )} */}
          </div>
        </div>
      ))}
    </div>
  );


}
export default DeteteData;