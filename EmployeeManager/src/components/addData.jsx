import { useDispatch } from "react-redux";
import { useState } from "react";
import { addemployee } from "../redux/action";
import { 
  User, 
  Users, 
  MapPin, 
  Briefcase, 
  Bookmark, 
  CalendarDays, 
  Clock, 
  DollarSign, 
  Mail, 
  Phone, 
  Image 
} from "lucide-react";

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
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <User className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          id="name"
          name="name" 
          placeholder="John Doe" 
          value={employee.name} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Users className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="number" 
          id="age"
          name="age" 
          placeholder="28" 
          value={employee.age} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2 md:col-span-2">
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          id="address"
          name="address" 
          placeholder="123 Main Street, City, Country" 
          value={employee.address} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
      <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Briefcase className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          id="designation"
          name="designation" 
          placeholder="Senior Developer" 
          value={employee.designation} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Bookmark className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          id="department"
          name="department" 
          placeholder="Engineering" 
          value={employee.department} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>
    
    <div className="space-y-2">
      <label htmlFor="joining_date" className="block text-sm font-medium text-gray-700">Joining Date</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CalendarDays className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          id="joining_date"
          name="joining_date" 
          placeholder="2023-01-15" 
          value={employee.joining_date} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Clock className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          id="experience"
          name="experience" 
          placeholder="5 years" 
          value={employee.experience} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <DollarSign className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="number" 
          id="salary"
          name="salary" 
          placeholder="75000" 
          value={employee.salary} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="email" 
          id="email"
          name="email" 
          placeholder="john.doe@example.com" 
          value={employee.email} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Phone className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="number" 
          id="phone"
          name="phone" 
          placeholder="9876543210" 
          value={employee.phone} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>

    {/* Profile Image Section */}
    <div className="md:col-span-2 space-y-2">
      <label htmlFor="profile_image" className="block text-sm font-medium text-gray-700">Profile Image URL</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Image className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          id="profile_image"
          name="profile_image" 
          placeholder="https://example.com/images/profile.jpg" 
          value={employee.profile_image} 
          onChange={handleChange} 
          required 
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>
  </div>

  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
    <button 
      type="button" 
      className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors"
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
      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:-translate-y-1"
    >
      Add Employee
    </button>
  </div>
</form>
    );
}

export default AddData;