import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees, deleteData } from "../redux/action";
import { Trash2 } from 'lucide-react';

function DeteteData(){

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(fetchEmployees());

  },[dispatch])


  const {post} = useSelector((state)=>state)
  console.log("from delete redux",post)

  const handleDelete=(id)=>{
    alert("Please conform if you want to delete")
    dispatch(deleteData(id)).then(()=>{ dispatch(fetchEmployees());})
    
  }
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {post.map((item) => (
        <div key={item[0]} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{item[1].name}</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {item[1].designation}
              </span>
            </div>
            
            <div className="mt-4 space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Age:</span> {item[1].age}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Department:</span> {item[1].department}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {item[1].email}
              </p>
            </div>
            
            <div className="mt-6   pt-4 border-t border-gray-100 flex justify-end">
            <button 
                onClick={() => handleDelete(item[0])} 
                className="flex w-20 justify-center items-center  gap-1 bg-gray-300 hover:bg-gray-200 text-gray-700 font-medium  rounded p-6 text-sm transition-colors duration-200 shadow-sm"
              >
                <Trash2 size={16} className="text-red-500" />
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );


}
export default DeteteData;