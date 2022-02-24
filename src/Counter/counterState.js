// 1. Actions & Action Types
export const ACTION_COUNTER_INCREMENT = "[counter] INCREMENT";
export const ACTION_COUNTER_DECREMENT = "[counter] DECREMENT";
export const ACTION_COUNTER_PREPARE_BOOST = "[counter] PREPARE_BOOST";
export const ACTION_COUNTER_BOOST = "[counter] BOOST";

export const actionCounterIncrement = () => ({
    type: ACTION_COUNTER_INCREMENT
});

export const actionCounterDecrement = () => ({
    type: ACTION_COUNTER_DECREMENT
});

export const actionCounterPrepareBoost = (boostBy = 1) => ({
    type: ACTION_COUNTER_PREPARE_BOOST,
    payload: boostBy
});

export const actionCounterBoost = (boostBy = 1) => ({
    type: ACTION_COUNTER_BOOST,
    payload: boostBy,
});

// 2. Reducers
export const counterReducer = (state = 0, action) => {

    switch (action.type) {
        case ACTION_COUNTER_INCREMENT:
            return state + 1;

        case ACTION_COUNTER_DECREMENT:
            return state - 1;

        case ACTION_COUNTER_BOOST:
            return state + action.payload;

        default:
            return state;
    }
}

// 3. Middleware
export const counterMiddleware = ({ dispatch }) => (next) => (action) => {
    next(action); // Forward the next action

    if (action.type === ACTION_COUNTER_PREPARE_BOOST) {
        console.log("Preparing boost...");
        setTimeout(() => {
            console.log("Boost is ready!");
            dispatch( actionCounterBoost(action.payload) );
        }, 2000);
    }

    if (action.type === ACTION_COUNTER_BOOST) {
        console.log("BOOSTED!! 🚀🚀");
    }

}