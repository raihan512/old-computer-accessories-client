import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import SignIn from "../../pages/Auth/SignIn/SignIn";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import AddProducts from "../../pages/SellerPages/AddProducts/AddProducts";
import MyProducts from "../../pages/SellerPages/MyProducts/MyProducts";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <PrivateRoute><Category></Category></PrivateRoute>
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/productdetails/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/productdetails/${params.id}`),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: '/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
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
    }, {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])