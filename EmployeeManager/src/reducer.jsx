// import { useEffect} from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { SUCCESS, LOADING, ERR } from './redux/actionTypes';







// const Reducer=()=>{
    
    
//     const dispatch = useDispatch();
//     const {post, isloading, error} = useSelector((state)=>state)
//     console.log(post, isloading, error);

//     const fetchData=async()=>{
//      try {
        
//         const response = await axios.get("https://employeem-bce7f-default-rtdb.firebaseio.com/employees.json");
//         dispatch({type:SUCCESS, payload:Object.entries(response.data)})

//      } catch (error) {
//         console.log(error);
//      }


//     }

//     useEffect(()=>{

//         fetchData();
//     },[])
       
  
     

//     async function delettt(id){
//       await axios.delete(`https://employeem-bce7f-default-rtdb.firebaseio.com/employees/${id}.json`)
//         fetchData();
//     }

//     console.log(post)

//     return(
//         <>
//         <h1>masai</h1>
//         {
//            post.map((item)=>(
//                 <div key={item[0]}>

//                 <h1 >{item[1].name}</h1>
//                 <button onClick={()=>{delettt(item[0])}}>delete</button>
//                 </div>
                
//             ))
//         }

        
        
//         </>
//     )
      

// }

// export default Reducer
