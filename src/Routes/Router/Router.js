import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import SignIn from "../../pages/Auth/SignIn/SignIn";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import Home from "../../pages/Home/Home/Home";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])