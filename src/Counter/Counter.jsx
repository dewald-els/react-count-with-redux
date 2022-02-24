import { useDispatch, useSelector } from "react-redux";
import { actionCounterDecrement, actionCounterIncrement, actionCounterPrepareBoost } from "./counterState";

const Counter = () => {
   
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch(); // Trigger Actions

    // Increment
    const onIncrementClick = () => {
        dispatch( actionCounterIncrement() )
    }

    // Decrement
    const onDecrementClick = () => {
        dispatch( actionCounterDecrement() )
    }
    // Boost 

    const onBoostClick = () => {
        dispatch( actionCounterPrepareBoost(5) );
    }

    return (
        <>
            <h1>The Ultimate Counter</h1>
            <b>{ counter }</b>
            <div>
                <button onClick={ onIncrementClick }>+</button>
                <button onClick={ onDecrementClick }>-</button>
                <button onClick={ onBoostClick }>Boost</button>
            </div>
        </>
    );
}
export default Counter;