import * as Type from "redux/actionTypes";
import instance from "auth/axios.config";

export const fetchProfileAcct=()=> async(dispatch)=>{
    dispatch({type:Type.FETCH_PROFILESTART})
    try{
        const {data} = await instance.get();
        dispatch({
            type: Type.FETCH_PROFILESUCCESS,
            payload: data
        });
    }
    catch(err){
        dispatch({
            type:Type.FETCH_PROFILEERROR, 
            payload:err.message
        })
    }
}
