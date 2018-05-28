import * as types from "./constants";


const initialState = {
	user: {},
	message: {},
};

export default function reducer(state = initialState, action)
{
	switch(action.type)
	{
		case types.CREATE_USER:
			console.log(action.payload)
			return {
				...state,
				user: action.payload
			}
		break;

		case types.CREATE_MESSAGE:
			console.log(action.payload)
			return {
				...state,
				user: action.payload
			}
		break;

		case types.SHOW_MESSAGE:
			console.log(action.payload)
			return {
				...state,
				user: action.payload
			}
		break;

		case types.CREATE_CHANNEL:
			console.log(action.payload)
			return {
				...state,
				user: action.payload
			}
		break;


		default:
			return state;
	};
};
