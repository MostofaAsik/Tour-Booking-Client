import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Tours from "../pages/Home/Tours";
import ToursDetails from "../pages/Home/ToursDetails";
import SignIn from "../pages/Home/SignIn";
import SignUp from "../pages/Home/SignUp";
import SearchResult from "../pages/Home/SearchResult";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2 className="text-red-700">Error Page</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/tours',
                element: <Tours />
            },
            {
                path: 'tours/:id',
                element: <ToursDetails />
            },
            {
                path: 'signin',
                element: <SignIn />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'tours/search',
                element: <SearchResult />
            }

        ]
    },
]);

export default router