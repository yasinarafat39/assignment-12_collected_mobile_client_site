import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../componets/Pages/ErrorPage/ErrorPage";
import Home from "../../componets/Pages/Home/Home";
import Main from "../../Layout/Main/Main";
import SignIn from "../../componets/Pages/SignIn/SignIn"
import SignUp from "../../componets/Pages/SignUp/SignUp"
import ProductsByCategory from "../../componets/Pages/ProductsByCategory/ProductsByCategory";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyOrders from "../../componets/Pages/Dashboard/MyOrders/MyOrders";
import AddProduct from "../../componets/Pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../../componets/Pages/Dashboard/MyProducts/MyProducts";
import AllSeller from "../../componets/Pages/Dashboard/AllSeller/AllSeller";
import MakeAdmin from "../../componets/Pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "../AdminRoute/AdminRoute";
import MyProfile from "../../componets/Pages/Dashboard/MyProfile";
import SellerRoute from "../SellerRoute/SellerRoute";
import BlogsPage from "../../componets/Pages/Blogs/BlogsPage";
import AllBuyer from "../../componets/Pages/Dashboard/AllBuyer/AllBuyer";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><ProductsByCategory></ProductsByCategory></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/blogs',
                element: <BlogsPage></BlogsPage>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/makeadmin',
                element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
            },

        ]
    }
])