import { useLocation, Outlet, Navigate } from 'react-router-dom'
import useUser from '../hooks/useAuth'

const RequireAuth = () => {
    const { user } = useUser()
    const location = useLocation()

    return (
        user.status ? <Outlet />
             : <Navigate to='/' state={{from: location}} replace />
    )
}

export default RequireAuth