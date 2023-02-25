import { Routes, Route } from 'react-router-dom'
import Background from './components/Background'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Background />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registry" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
