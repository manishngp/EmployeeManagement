import { useSelector, useDispatch } from "react-redux";
import{useEffect} from "react"
import { fetchEmployees } from "../redux/action";

import { Phone, Mail, Briefcase, Building } from 'lucide-react';


function DisplayData(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const {post}= useSelector((state) => state);
   
    //    const hh =useSelector((state)=>state.post)
        console.log(post)
    
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  {post.map((post) => (
                    <div
                      key={post[0]}
                      className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100"
                    >
                      {/* Header with image and gradient overlay */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img
                          src={post[1].profile_image}
                          alt={post[1].name}
                          className="w-full h-48 object-fill object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                          <h2 className="text-xl font-bold text-white mb-1">{post[1].name}</h2>
                          <span className="inline-block bg-blue-600/80 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                            {post[1].designation}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5 space-y-3">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Building size={16} className="text-blue-600" />
                          <span>{post[1].department}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-700">
                          <Mail size={16} className="text-blue-600" />
                          <span>{post[1].email}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-700">
                          <Phone size={16} className="text-blue-600" />
                          <span>{post[1].phone}</span>
                        </div>
                        
                        <div className="pt-4 flex gap-2">
                          <button
                            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all active:scale-95"
                            onClick={() => window.location.href = `mailto:${post[1].email}`}
                          >
                            <Mail size={16} />
                            <span>Email</span>
                          </button>
                          
                          <button
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-all active:scale-95"
                            onClick={() => window.location.href = `tel:${post[1].phone}`}
                          >
                            <Phone size={16} />
                            <span>Call</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            
}
export default DisplayData;