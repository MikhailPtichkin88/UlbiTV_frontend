import { getUserAuthData } from "entities/User"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

interface RequireAuthProps {
     children: JSX.Element
    
}

export const RequireAuth = ({children}:RequireAuthProps) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  if(!auth){
    return <Navigate to={RoutePath.main} state={{from: location}} replace/>
  }
  return children
}
