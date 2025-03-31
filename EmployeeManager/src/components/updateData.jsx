import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchEmployees} from "../redux/action";
import UpdateEmployee from "./updateEmp";
import { useNavigate } from "react-router-dom";

function UpdateData() {
    const dispatch = useDispatch();

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const { post, loading, error } = useSelector((state) => state);
    // const [editingEmployee, setEditingEmployee] = useState(null);
    // const handlesetedit=(data)=>{
    //     console.log("here", data);
    //     setEditingEmployee(data)

    // }

    return (
        <>
            <h1>Employee List</h1>

            {loading && <h2>Loading...</h2>}
            {error && <h2>Error: {error}</h2>}

            {
                post.map((item) => (
                    <div key={item[0]}>
                        <h2>{item[1].name}</h2>
                        <img src={item[1].profile_image} alt={item[1].name} width="50" />
                        {/* <button onClick={() => dispatch(deleteEmployee(item.id))}>Delete</button> */}
                        <button onClick={() =>navigate(`/${item[0]}`)}>Edit</button>
                       
                    </div>

                ))
           }



            
        </>
    );
}

export default  UpdateData;
