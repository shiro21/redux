export const AUTH = "SIGNIN";

export const signIn = (state) => ({ type: AUTH, state })

const initState = {
    id: "",
    password: ""
};

export const auth = (state = initState, action) => {
    console.log(action.state);
    switch(action.type) {
        case AUTH :
            return {
                ...state,
                id: action.state.id,
                password: action.state.password
            }

        default : 
            return state;

    }
}