import { Outlet } from "react-router-dom"

const AppLogged = () => {
  return (
    <>
      <div>AppLoggedHeader</div>
      <Outlet />
      <div>AppLoggedFooter</div>
    </>
  )
}

export default AppLogged