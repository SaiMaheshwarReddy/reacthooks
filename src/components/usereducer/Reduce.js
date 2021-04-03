import React,{ useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
switch(action) {
case 'increment':
    return state + 1
    case 'decrement':
        return state - 1
        case 'reset':
            return initialState
            default:
                return state
}
}
const Reduce = () => {
//     const arr = [1, 2, 3, 4, 5];
//  const reducer = (acc, currVal) => acc + currVal;
//  console.log(arr.reduce(reducer))

const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count: {count} </div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default Reduce
