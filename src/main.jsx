import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router'
import { router } from './Routes/Router'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
