import * as types from "./constants";
import axios from "axios";


export function show_message() {
	return (dispatch, state) => {
		axios.get(`http://localhost:9000/api/le100/message`)
		.then((result) => {
			console.log("message -", result);

			dispatch({
				type: types.SHOW_MESSAGE,
				payload: result.data
			});
		})
		.catch((e) => { console.log('show_message -', e)})
	};
};

export function create_message(message,firstname) {
	return (dispatch, state) => {
		axios.post(`http://localhost:9000/api/le100/message`,
		{
			message: message,
			firstname: firstname
		})
		.then((result) => {
			dispatch({
				type: types.CREATE_MESSAGE,
				payload: result.data
			});
		})
		.catch((e) => { console.log('create_message - ', e)})
	};
}; 

export function create_user(firstname,lastname,email) {
	return (dispatch, state) => {
		axios.post(`http://localhost:9000/api/le100/user`,
		{ 
			firstname: firstname,
			lastname: lastname, 
			email: email,
		})
		.then((result) => {
			dispatch({
				type: types.CREATE_USER,
				payload: result.data
			});
		})
		.catch((e) => { console.log('create_user - ', e) })
	};
}; 

export function create_channel(email,firstname) {
	return (dispatch, state) => {
		axios.post(`http://localhost:9000/api/le100/channel`,
		{	
			email: email,
			firstname: firstname,
		})
		.then((result) => {
			dispatch({
				type: types.CREATE_CHANNEL,
				payload: result.data
			});
		})
		.catch((e) => { console.log('create_channel - ', e) })
	};
}; 


