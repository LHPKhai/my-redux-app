import { Types } from '../actions/users';

const initialState = {
    items: [],
    error: ''
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_USERS_SUCCESS:
            return { ...state, items: action.payload.items };

        case Types.CREATE_USER_REQUEST:
            return { ...state, items: [...state.items, action.payload] };

        case Types.DELETE_USER_REQUEST:
            return { ...state, items: state.items.filter(user => user.id !== action.payload.userId) };

        case Types.UPDATE_USER_REQUEST:
            return {
                ...state,
                items: state.items.map(user =>
                    user.id === action.payload.id
                        ? { ...user, firstName: action.payload.firstName, lastName: action.payload.lastName }
                        : user
                )
            };

        case Types.USERS_ERROR:
            return { ...state, error: action.payload.error };

        default:
            return state;
    }
}
