import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    // var firstCounter = useState(0);
    // var counter = firstCounter[0];
    // var setCounter = firstCounter[1];
    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {

            setCount(prevState => prevState + 1)
            // setCounter(prevState => prevState + 1)

        }
    }
    const decrementFive = () => {
        for(let i = 0; i < 5; i++) {
            
            setCount(prevState => prevState - 1)
            // setCounter(prevState => prevState - 1)

        }
    }
    return (
        <>
            <h1>{count}</h1>
            {/* <h1>{counter}</h1> */}
            <div className="controls">
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment by 1</button>
            {/* <button onClick={() => setCounter(prevState => prevState + 1)}>Increment by 1</button> */}
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement by 1</button>
            {/* <button onClick={() => setCounter(prevState => prevState - 1)}>Decrement by 1</button> */}
            <button onClick={incrementFive}>Increment by 5</button>
            <button onClick={decrementFive}>Decrement by 5</button>
            <button onClick={() => setCount(0)}>Reset</button>
            {/* <button onClick={() => setCounter(0)}>Reset</button> */}
            </div>
        </>
    )
}

export default Counter
