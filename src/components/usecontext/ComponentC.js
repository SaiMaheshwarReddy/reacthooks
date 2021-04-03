import React, {useContext } from 'react'
import { UserContext, AgeContext } from '../../App'

const ComponentC = () => {
    const user = useContext(UserContext)
    const age = useContext(AgeContext)
    return (
        <div>
            {user}  ----{age} 
        </div>
    )
}

export default ComponentC
