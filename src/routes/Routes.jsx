import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import PrivateRoute from "./PrivateRoute"
import MyApplyList from "../pages/MyApplyList"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, //< Outlet> এর ভিতরে ডিফল্ট হিসাবে থাকবে তাই path:'/'= index:true ,
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/registration',
                element: <Register />,
            },
            {
                path: '/my_Apply_List',
                element: (
                    <PrivateRoute>
                        <MyApplyList></MyApplyList>
                    </PrivateRoute>
                ),
            },


        ],
    },
])

export default router