const initial_state = {
  is_loading:false,
  data:[],
  is_having_error:false
  };

const AllDataReducer = (state = initial_state, action) => {

  switch(action.type){
    case 'FETCH_DATA_LOADING':
       return {...state, is_loading:true} 
    case 'FETCH_DATA_SUCCESS':
       return {...state,is_loading:false,data:action.payload}
    case 'FETCH_DATA_ERROR_OCCURED':
      return {...state,is_loading:false,data:[],is_having_error:true}  
    default:
       return state 
  }

}

export default AllDataReducer;