import { UserRole, getUserAuthData, getUserRoles } from '@/entities/User'
import { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)
  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }
    return roles.some((requiredRole) => {
      const hasRole = userRoles.includes(requiredRole)
      return hasRole
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    )
  }

  return children
}
