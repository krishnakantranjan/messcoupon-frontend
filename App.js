import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
  
// i have to push first


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <Error />, 
        children: [
            {
                path: "/",
                element: <Login />,
            },
            // {
            //     path: "/login",
            //     element: <Login />,
            // },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/profile",
                element: <Profile />,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);