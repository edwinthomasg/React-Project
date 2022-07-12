import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectComponent = ({role, children}) => {
    const user = useSelector( state => state.userTokener )
    const admin = useSelector( state => state.adminTokener )
    
    if(user._userId && user.userRole === role)
    return children

    if(admin._adminId && admin.adminRole === role)
    return children

    if(role === 'admin')
    return <Navigate to='/admin/login' replace/>
    
    else if(role === 'user')
    return <Navigate to='/auth' replace/>
    
}

export default ProtectComponent