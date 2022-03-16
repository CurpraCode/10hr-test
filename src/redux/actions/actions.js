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

export const addProfile=()=> async(dispatch)=>{
    dispatch({type:Type.ADD_PROFILESTART})
    try{
        const {data} = await instance.get();
        const itemIndex = data.findIndex(
            (basketItem) => basketItem.id === action.item.id
          );
          let newBasket = [...state.basket];
          if (itemIndex >= 0) {
            newBasket[itemIndex].quantity += 1;
          } else {
            newBasket = [...state.basket, action.item];
          }
          localStorage.setItem("basket", JSON.stringify(newBasket));
          dispatch({
            type: Type.ADD_PROFILESUCCESS,
            payload: data
        });
    }
    catch(err){
        dispatch({
            type:Type.ADD_PROFILEERROR, 
            payload:err.message
        })
    }
}