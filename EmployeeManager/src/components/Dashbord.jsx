import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoempmag from '../assets/logoempmag.png';
import Operation from './operations';

function Dashboard({ children }) {
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path) => location.pathname === path;
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white text-gray-800 shadow-lg h-screen fixed left-0 top-0 z-10 transition-all duration-300">
        {/* Logo section */}
        <div className="p-3 border-b">
          <img src={logoempmag} alt="logo" className="w-70 mx-auto" />
        </div>
        
        {/* Navigation Links */}
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-4 pl-2">Main Navigation</h3>
          
          <Link 
            to="/" 
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              isActive('/display') 
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'hover:bg-gray-100'
            }`}
          >
            <span className="flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </span>
            <span>Display All Employee</span>
          </Link>
          <Link 
            to="/add" 
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              isActive('/add') 
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'hover:bg-gray-100'
            }`}
          >
            <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded">+</span>
            <span>Add New Employee</span>
          </Link>
          
         
          
          <Link 
            to="/update" 
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              isActive('/update') 
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'hover:bg-gray-100'
            }`}
          >
            <span className="flex items-center justify-center w-6 h-6 bg-amber-100 text-amber-600 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </span>
            <span>Update</span>
          </Link>
          
          <Link 
            to="/delete" 
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              isActive('/delete') 
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'hover:bg-gray-100'
            }`}
          >
            <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </span>
            <span>Delete</span>
          </Link>
        </div>
        
        {/* Footer section */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <div className="flex items-center justify-center text-sm text-gray-500">
            <span>@ 2025 </span>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Top navbar */}
        <div className="bg-white shadow-sm border-b h-16 flex items-center px-6">
          <Operation />
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 bg-gray-50">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;