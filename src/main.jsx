import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './layouts/Root';
import Home from './layouts/Home';
import Login from './components/Login/Login';
import Register from './components/Register';
import SignIn from './components/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/login', Component: Login },
      {path:'/register' , Component:Register},
      {path:"/signIn", Component:SignIn}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
