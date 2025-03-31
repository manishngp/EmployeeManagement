import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchEmployees} from "../redux/action";
import UpdateEmployee from "./updateEmp";
import { useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";

function UpdateData() {
    const dispatch = useDispatch();

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const { post} = useSelector((state) => state);


    return (
        <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Employee List</h1>
        
        <div className="space-y-3">
          {post.map((item) => (
            <div 
              key={item[0]} 
              className="bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 flex overflow-hidden"
            >
              <div className=" w-16 flex items-center justify-center flex-shrink-0">
              
                  <img 
                    src={item[1].profile_image} 
                    alt={item[1].name} 
                    className="w-15 h-15 ml-2 rounded-full border-2 border-white object-cover"
                  />
               
              </div>
              
              <div className="p-3 flex-grow">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-800">{item[1].name}</h2>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                    {item[1].designation || 'Employee'}
                  </span>
                </div>
                
                <div className="mt-1 flex items-center text-sm text-gray-600 space-x-4">
                  <span>{item[1].department || 'Department'}</span>
                  <span>•</span>
                  <span>{item[1].email || 'Email'}</span>
                </div>
              </div>
              
              <div className="flex items-center p-3 border-l border-gray-100">
                <button 
                  onClick={() => navigate(`/${item[0]}`)} 
                  className="flex items-center gap-1 bg-gray-50 hover:bg-gray-100 text-gray-600 py-1 px-3 rounded text-xs font-medium transition-colors duration-200"
                >
                  <Pencil size={12} />
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default  UpdateData;
