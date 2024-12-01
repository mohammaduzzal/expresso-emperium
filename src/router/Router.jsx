import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../mainLayout/MainLayout";
import AddCoffee from "../pages/AddCoffee";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UpdateCoffee from "../pages/UpdateCoffee";
import Users from "../pages/Users";




const router = createBrowserRouter([
   {
    path:'/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addCoffee',
            element: <AddCoffee></AddCoffee>
        },
        {
            path: '/updateCoffee',
            element: <UpdateCoffee></UpdateCoffee>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        },
        {
            path: '/users',
            element: <Users></Users>
        },
    ]
   }
])

export default router