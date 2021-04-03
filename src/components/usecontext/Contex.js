import React, { useContext } from 'react'
import { UserContext, AgeContext } from '../../App'

const Contex = () => {
    let user = useContext(UserContext);
    let age = useContext(AgeContext);
    return (
        <div>
            {user} -- {age}
            
        </div>
    )
}

export default Contex
