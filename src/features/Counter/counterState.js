// Action Types
export const ACTION_COUNTER_INCREMENT = "INCREMENT"
export const ACTION_COUNTER_DECREMENT = "DECREMENT"
export const ACTION_COUNTER_BOOST = "BOOST"
// Actions
export const increment = () => ({
    type: ACTION_COUNTER_INCREMENT
})

export const decrement = () => ({
    type: ACTION_COUNTER_DECREMENT
})

export const boost = (offset = 1) => ({
    type: ACTION_COUNTER_BOOST,
    payload: offset
})

// Reducer
export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case ACTION_COUNTER_INCREMENT:
            return state + 1
        case ACTION_COUNTER_DECREMENT:
            return state - 1
        case ACTION_COUNTER_BOOST:
            return state + action.payload
        default:
            return state
    }
}