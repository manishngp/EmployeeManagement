
import { SUCCESS, LOADING, ERR, DELETE, NEWONE, UPDATED } from "./actionTypes"


export const initialvalue={
    post : [],
    // isloading : true,
    // error:""
    
}
export const Datareducer =(state=initialvalue, action)=>{
console.log(action.payload);
    switch(action.type){
        case SUCCESS:
            return {...state, post: action.payload}
        // case LOADING:
        //     return  {...state, isloading: action.payload}  
        // case ERR:
        //     return {...state, error:action.payload}

        case NEWONE:
            return {...state, post: [...state.post, action.payload ] }

        case DELETE:
            return {...state, post:state.post.filter((employee)=> employee.id !== action.payload)}
         
        case UPDATED:
            return {...state,
                   post : state.post.map((emplo)=>emplo.id === action.payload.id ? {...emplo , ...action.payload.updatedInfo}:emplo)
            }    


        default:
            return state;    
                 
    }
}

// = (state = initialState, action) => {
//     switch (action.type) {
//         case "FETCH_EMPLOYEES_REQUEST":
//             return { ...state, loading: true };
//         case "FETCH_EMPLOYEES_SUCCESS":
//             return { ...state, loading: false, data: action.payload };
//         case "FETCH_EMPLOYEES_FAILURE":
//             return { ...state, loading: false, error: action.payload };
//         default:
//             return state;
//     }
// };
