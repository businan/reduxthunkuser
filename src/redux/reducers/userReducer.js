import {
    GET_USER_INFOS_ERROR,
    GET_USER_INFOS_START,
    GET_USER_INFOS_SUCCESS,
} from "../types/types";

const INITIAL_STATE = {
    users: [],
    message: "",
    loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_INFOS_START:
            return { ...state, loading: true, message: "" };
        case GET_USER_INFOS_SUCCESS:
            return { ...state, users: action.payload, loading: false };
        case GET_USER_INFOS_ERROR:
            return { ...state, message: action.payload, loading: false };
        default:
            return state;
    }
};

export default userReducer;
