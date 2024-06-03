import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import OTP from './OTP';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/otp",
    element: <OTP />
  }
])

function App() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid white', color: 'white', padding: '20px', height: '400px', width: '300px', borderRadius: '12px' }}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
