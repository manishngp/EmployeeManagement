import { SUCCESS, LOADING, ERR, NEWONE, UPDATED } from "./actionTypes"

import axios from "axios";




const FIREBASE_URL = "https://employeem-bce7f-default-rtdb.firebaseio.com/employees.json";

export const fetchEmployees = () => {
    return async (dispatch) => {
        // dispatch({ type: S });

        try {
            const response = await axios.get(FIREBASE_URL);
            console.log(response.data);
            dispatch({ type: SUCCESS, payload:Object.entries(response.data) });
        } catch (error) {
            // dispatch({ type: ERR, payload: error.message });
            console.log(error);
        }
    };
};


export const deleteData =(id)=>{

    return async (dispatch)=>{
        try {
            await axios.delete(`https://employeem-bce7f-default-rtdb.firebaseio.com/employees/${id}.json`)
            dispatch({})
        } catch (error) {
            console.log(error)
        }
    }
}

export const addemployee=(empData)=>{


    return async(dispatch)=>{

        try {

            await axios.post(FIREBASE_URL, empData)
            dispatch({type: NEWONE, payload:empData})
            
        } catch (error) {
            console.log("this is from adding function", error)
        }

    }
}

export const updateUser=(id, updatedInfo)=>{
    console.log(id, updatedInfo);
    
    return async(dispatch)=>{
    try {
        await axios.put(`https://employeem-bce7f-default-rtdb.firebaseio.com/employees/${id}.json`, updatedInfo);
        dispatch({type:UPDATED,payload:{id, updatedInfo} })
    } catch (error) {
        console.log("from the update file", error);
    }
}
}


