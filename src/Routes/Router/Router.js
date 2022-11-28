import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import SignIn from "../../pages/Auth/SignIn/SignIn";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import AllBuyers from "../../pages/Dashboard/Buyers/Buyers";
import Allseller from "../../pages/Dashboard/Seller/Seller";
import DashboardLayout from "../../pages/Dashboard/DashboardLayout/DashboardLayout";
import ReportedItems from "../../pages/Dashboard/ReportedItems/ReportedItems";
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
                element: <AddProducts></AddProducts>
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
    },
    {
        path: '/dashboard/:usercategory',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/:usercategory/allsellers',
                element: <Allseller></Allseller>
            },
            {
                path: '/dashboard/:usercategory/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/:usercategory/reporteditems',
                element: <ReportedItems></ReportedItems>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])