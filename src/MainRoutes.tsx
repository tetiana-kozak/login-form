import InnerContent from 'components/InnerContent/InnerContent'
import MainPage from 'pages/MainPage/MainPage'
import SignInPage from 'pages/SignInPage/SignInPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute'

type Props = {}

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route index element={<SignInPage />} />

        <Route
          path="main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />

        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  )
}
export default MainRoutes
