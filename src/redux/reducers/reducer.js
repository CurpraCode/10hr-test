import * as types from "redux/actionTypes";

const fetchProfileState = {
	users: [],
	loading: false,
	error: null,
};
// const addProfileState={
//     profile:[],
//     loading:false,
//     error:null
// }

export const fetchProfileReducer = (state = fetchProfileState, action) => {
	switch (action.type) {
		case types.FETCH_PROFILESTART:
			return {
				...state,
				loading: true,
			};
		case types.FETCH_PROFILESUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
			};
		case types.FETCH_PROFILEERROR:
			return {
				...state,
				loading: false,
				users: action.payload,
			};
		default:
			return state;
	}
};

// export const addProfileReducer =(state=addProfileState, action)=>{
//     switch(action.type){
//         case types.ADD_PROFILESTART:
//             return{
//                 ...state,
//                 loading:true,
//             };
//             case types.ADD_PROFILESUCCESS:
//                 return{
//                     ...state,
//                     loading:false,
//                     profile: action.payload,
//                 }
//             case types.ADD_PROFILEERROR:
//                 return{
//                     ...state,
//                     loading:false,
//                     profile:action.payload,
//                 }
//                 default:
//                     return state;
//     }
// }