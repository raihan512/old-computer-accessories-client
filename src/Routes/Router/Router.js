import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
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
import AdminRoute from "../AdminRoute/AdminRoute";
import Payment from "../../pages/Payment/Payment";
import MyBookings from "../../pages/MyBookings/MyBookings";
import Login from "../../pages/Auth/Login/Login";
import Register from "../../pages/Auth/Register/Register";
import AllProducts from "../../pages/AllProducts/AllProducts";

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
                path: '/allproducts',
                element: <AllProducts></AllProducts>,
                loader: () => fetch('https://pcparts-server.vercel.app/products')
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://pcparts-server.vercel.app/products/${params.id}`),
                element: <PrivateRoute><Category></Category></PrivateRoute>
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/productdetails/:id',
                loader: ({ params }) => fetch(`https://pcparts-server.vercel.app/productdetails/${params.id}`),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: '/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/mybookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/payment/:id',
                loader: ({ params }) => fetch(`https://pcparts-server.vercel.app/bookings?id=${params.id}`),
                element: <Payment></Payment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard/:usercategory',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/:usercategory/allsellers',
                element: <AdminRoute><Allseller></Allseller></AdminRoute>
            },
            {
                path: '/dashboard/:usercategory/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
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