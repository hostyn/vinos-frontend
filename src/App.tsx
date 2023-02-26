import { Routes, Route } from 'react-router-dom'
import Background from './components/Background'
import NotAuthenticatedContent from './components/NotAuthenticatedContent'
import ProtectedContent from './components/ProtectedContent'
import Add from './pages/Add'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Background />}>
        <Route
          index
          element={
            <ProtectedContent>
              <Home />
            </ProtectedContent>
          }
        />
        <Route
          path="/login"
          element={
            <NotAuthenticatedContent>
              <Login />
            </NotAuthenticatedContent>
          }
        />
        <Route
          path="/registry"
          element={
            <NotAuthenticatedContent>
              <Register />
            </NotAuthenticatedContent>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedContent>
              <Add />
            </ProtectedContent>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
