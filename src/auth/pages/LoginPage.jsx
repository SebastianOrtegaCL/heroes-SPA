import { Outlet } from 'react-router-dom'
export const LoginPage = () => {
  return (
    <>
        <h1>Login Page</h1> 
    


      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
