import React, { useReducer } from 'react'
import ComponentA from './components/usereducer with usecontext/ComponentA';
import ComponentB from './components/usereducer with usecontext/ComponentB';
import ComponentC from './components/usereducer with usecontext/ComponentC';
// import ComponentC from './components/usecontext/ComponentC';
// import Contex from './components/usecontext/Contex';
// import Counter2 from './components/usereducer/Counter2';
// import Reduce from './components/usereducer/Reduce';
// import Fetching from './components/useeffect/Fetching'
// import Counter from './components/usestate/Counter'
// export const UserContext = React.createContext();
// export const AgeContext = React.createContext();
export const CountContext = React.createContext()
const initialState = 0


const reducer = (state, action) => {
  switch(action){
      case 'increment':
      return state + 1

      case 'decrement' :
      return state - 1

      case 'reset':
          return initialState                                                                                                                                                                              
          default:

          return state
      
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (

    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      Count --- {count}
     {/* <Counter /> */}
     {/* <Fetching /> */}
     {/* <UserContext.Provider value="sai">
       <AgeContext.Provider value= "23">

     <Contex />
     <ComponentC />
       </AgeContext.Provider>
     </UserContext.Provider> */}
     {/* <Reduce /> */}
     {/* <Counter2 /> */}
     <ComponentA />
     <ComponentB />
     <ComponentC />
    
    </div>
    </CountContext.Provider>
  );
}

export default App;
