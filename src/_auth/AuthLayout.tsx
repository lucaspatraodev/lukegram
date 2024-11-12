import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const AuthLayout = () => {
  const isAutenticated = false;


  return (
    <>
      {isAutenticated ? (
        <Navigate to='/' />
      ): (
        <>
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout