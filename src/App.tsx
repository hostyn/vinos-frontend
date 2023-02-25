import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  const handleClick = async (): Promise<void> => {
    await fetch((import.meta.env.VITE_BACKEND_URI as string) + '/registry', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@test.com',
        password: 'passsword',
      }),
    })

    const res = await fetch(
      (import.meta.env.VITE_BACKEND_URI as string) + '/measurements',
      {
        credentials: 'include',
        method: 'GET',
      }
    )

    console.log(await res.json())
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount(count => count + 1)
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleClick}>Test</button>
    </div>
  )
}

export default App
