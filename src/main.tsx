import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import About from './pages/About.tsx'
import Store from './pages/Store.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/store',
        element: <Store />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
