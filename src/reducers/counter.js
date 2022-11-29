export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const increaseCount = count => ({ type: INCREASE, count });
export const decreaseCount = count => ({ type: DECREASE, count });

const initalState = {
    count: 0
};

export const counter = (state = initalState, action) => {
    switch(action.type) {
        case INCREASE :
            return {
                ...state,
                count: action.count
            };

        case DECREASE :
            return {
                ...state,
                count: action.count
            }

        default:
            return state;
    }
}
