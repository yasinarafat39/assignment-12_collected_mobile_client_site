import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../componets/Pages/ErrorPage/ErrorPage";
import Home from "../../componets/Pages/Home/Home";
import Main from "../../Layout/Main/Main";
import SignIn from "../../componets/Pages/SignIn/SignIn"
import SignUp from "../../componets/Pages/SignUp/SignUp"
import ProductsByCategory from "../../componets/Pages/productsByCategory/productsByCategory";

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
                element: <ProductsByCategory></ProductsByCategory>
            }
        ]
    }
])