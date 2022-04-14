import { ReactNode } from 'react'
import { NavigateOptions, useNavigate } from 'react-router-dom'
import { NavigateRoute } from 'routes'

const RouteButton = ({
  navigateRoute,
  naviateOptions = {},
  children,
}: {
  navigateRoute: NavigateRoute
  naviateOptions?: NavigateOptions
  children: ReactNode
}) => {
  const navigate = useNavigate()

  return <div onClick={() => navigate(navigateRoute, naviateOptions)}>{children}</div>
}

export default RouteButton
