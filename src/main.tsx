import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import { GlobalStyle } from './globalStyles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryCliet = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliet}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
