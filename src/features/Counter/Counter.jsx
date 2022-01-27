import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { boost, decrement, increment } from "./counterState"

const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.counter)

    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }
    const onBoost = () => {
        dispatch(boost(3))
    }

    return (
        <>
            <p>Count: { count }</p>
            <button onClick={ onIncrement }>+</button>
            <button onClick={ onDecrement }>-</button>
            <button onClick={ onBoost }>Boost</button>
        </>
    )
}
export default Counter