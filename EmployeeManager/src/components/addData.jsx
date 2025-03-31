import { useDispatch } from "react-redux";
import { useState } from "react";
import { addemployee } from "../redux/action";
import {User, Users, MapPin, Briefcase, Bookmark, CalendarDays, Clock, IndianRupee,  Mail, Phone, Image} from "lucide-react";

function AddData() {
    const dispatch = useDispatch();

    const [employee, setEmployee] = useState({
            name: "",
            age: "",
            designation: "",
            department: "",
            email: "",
            phone: "",
            address: "",
            joining_date: "",
            experience: "",
            salary: "",
            profile_image: ""
    });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addemployee(employee));
        setEmployee({  name: "",
            age: "",
            designation: "",
            department: "",
            email: "",
            phone: "",
            address: "",
            joining_date: "",
            experience: "",
            salary: "",
            profile_image: "" });
    };

    return (
<form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto border border-gray-100">
  <div className="mb-8 text-center">
    <h2 className="text-2xl font-bolder text-gray-800">Add New Employee</h2>
    <p className="text-gray-500 mt-1">Enter employee details to create a new profile</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {/* Personal Information Section */}
    <div className="md:col-span-2">
      <div className="flex items-center mb-4">
        <div className="h-px bg-gray-200 flex-grow"></div>
        <h3 className="text-gray-700 font-medium px-4">Personal Information</h3>
        <div className="h-px bg-gray-200 flex-grow"></div>
      </div>
    </div>
    
    <div className="space-y-2">
      <label htmlFor="name" className="flex gap-2 text-sm font-medium text-gray-700"><span> <User className="h-5 w-5 text-gray-400" /></span>Full Name</label>
      <div className="relative">
        
        <input 
          type="text" 
          id="name"
          name="name" 
          placeholder="Enter  Name" 
          value={employee.name} 
          onChange={handleChange} 
          required 
          className="w-full pl-0  pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="age" className="flex gap-2 text-sm font-medium text-gray-700"><span><Users className="h-5 w-5 text-gray-400" /></span>Age</label>
      <div className="relative">
       
        <input 
          type="number" 
          id="age"
          name="age" 
          placeholder="Enter age" 
          value={employee.age} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2 md:col-span-2">
      <label htmlFor="address" className="flex gap-2 text-sm  font-medium text-gray-700"><span> <MapPin className="h-5 w-5 text-gray-400" /></span>Address</label>
      <div className="relative">
       
        <input 
          type="text" 
          id="address"
          name="address" 
          placeholder="Enter Current Address" 
          value={employee.address} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    {/* Professional Information Section */}
    <div className="md:col-span-2 mt-4">
      <div className="flex items-center mb-4">
        <div className="h-px bg-gray-200 flex-grow"></div>
        <h3 className="text-gray-700 font-medium px-4">Professional Details</h3>
        <div className="h-px bg-gray-200 flex-grow"></div>
      </div>
    </div>
    
    <div className="space-y-2">
      <label htmlFor="designation" className="flex gap-2 text-sm font-medium text-gray-700"><span><Briefcase className="h-5 w-5 text-gray-400" /></span>Designation</label>
      <div className="relative">
        
        <input 
          type="text" 
          id="designation"
          name="designation" 
          placeholder="Enter Desiganation" 
          value={employee.designation} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="department" className="flex gap-2 text-sm font-medium text-gray-700"><span><Bookmark className="h-5 w-5 text-gray-400" /></span>Department</label>
      <div className="relative">
        
        <input 
          type="text" 
          id="department"
          name="department" 
          placeholder="Enter Department" 
          value={employee.department} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>
    
    <div className="space-y-2">
      <label htmlFor="joining_date" className="flex gap-2 text-sm font-medium text-gray-700"><span><CalendarDays className="h-5 w-5 text-gray-400" /></span>Joining Date</label>
      <div className="relative">
      
        <input 
          type="text" 
          id="joining_date"
          name="joining_date" 
          placeholder="Enter Joining Date (dd/mm/yyyy)" 
          value={employee.joining_date} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="experience" className="flex gap-2 text-sm font-medium text-gray-700"><span><Clock className="h-5 w-5 text-gray-400" /></span>Experience</label>
      <div className="relative">
        
        <input 
          type="text" 
          id="experience"
          name="experience" 
          placeholder="Enter Experience" 
          value={employee.experience} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="salary" className="flex gap-2 text-sm font-medium text-gray-700">< IndianRupee className="h-5 w-5 text-gray-400" />Salary</label>
      <div className="relative">
       
        <input 
          type="number" 
          id="salary"
          name="salary" 
          placeholder="Enter Salary" 
          value={employee.salary} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    {/* Contact Information Section */}
    <div className="md:col-span-2 mt-4">
      <div className="flex items-center mb-4">
        <div className="h-px bg-gray-200 flex-grow"></div>
        <h3 className="text-gray-700 font-medium px-4">Contact Information</h3>
        <div className="h-px bg-gray-200 flex-grow"></div>
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="email" className="flex gap-2 text-sm font-medium text-gray-700"><span><Mail className="h-5 w-5 text-gray-400" /></span>Email Address</label>
      <div className="relative">
        
        <input 
          type="email" 
          id="email"
          name="email" 
          placeholder="mymail@example.com" 
          value={employee.email} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="phone" className="flex gap-2 text-sm font-medium text-gray-700"> <span><Phone className="h-5 w-5 text-gray-400" /></span>Phone Number</label>
      <div className="relative">
        
        <input 
          type="number" 
          id="phone"
          name="phone" 
          placeholder="Enter Contact Number" 
          value={employee.phone} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    {/* Profile Image Section */}
    <div className="md:col-span-2 space-y-2">
      <label htmlFor="profile_image" className="flex gap-2 text-sm font-medium text-gray-700"><span> <Image className="h-5 w-5 text-gray-400" /></span>Profile Image URL</label>
      <div className="relative">
       
        <input 
          type="text" 
          id="profile_image"
          name="profile_image" 
          placeholder="Enter link of profile pic (drive link)" 
          value={employee.profile_image} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>
  </div>

  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
    <button 
      type="button" 
      className="px-4 py-2 w-35 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors"
      onClick={() => {setEmployee({
        name: "",
        age: "",
        designation: "",
        department: "",
        email: "",
        phone: "",
        address: "",
        joining_date: "",
        experience: "",
        salary: "",
        profile_image: ""
})}}
    >
      Reset Form
    </button>
    <button 
      type="submit" 
      className="px-8 w-35 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:-translate-y-1"
    >
      Add Employee  
    </button>
  </div>
</form>
    );
}

export default AddData;