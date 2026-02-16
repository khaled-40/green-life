import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PlantDetails from "../Pages/PlantDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/plants',
                Component: Plants
            },
            {
                path: '/myProfile',
                Component: MyProfile
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/plants/:id',
                Component: PlantDetails
            },
        ]
    }
])