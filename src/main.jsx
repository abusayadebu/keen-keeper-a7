import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Timeline from './pages/timeline/Timeline'
import HomePage from './pages/homepage/HomePage'
import Stats from './pages/stats/Stats'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        {
          index: true,
          element: <HomePage></HomePage>
        },
        {
          path: '/timeline',
          element: <Timeline></Timeline>
        },
        {
          path: '/stats',
          element: <Stats></Stats>
        }
      ],
      errorElement: <h2>Sorry page Not Found</h2>
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
