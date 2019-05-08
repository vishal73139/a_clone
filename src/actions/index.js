import axios from "axios";
const dbConstant   = { dbConnection: false, baseUrl : "http://localhost:3000" };
const dummyUrl = { 
	getData: "/sachin_data" 
};
 
export function setData() {
	return dispatch => { 
		dispatch({type:"FETCH_DATA_LOADING"});
		axios({
			method:"get",
			url:dbConstant.baseUrl+dummyUrl.getData
		}).then((resp) => {
			console.log(resp.data);
			dispatch({type:"FETCH_DATA_SUCCESS",payload:resp.data});
		}).catch(() => {
			dispatch({type:'FETCH_DATA_ERROR_OCCURED'});
		});
	};
}

