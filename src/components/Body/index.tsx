import { createBrowserRouter } from "react-router-dom";
import BrowseComponent from "../BrowseComponent";
import Login from "../Login";
import { RouterProvider } from "react-router-dom";

const BodyComp = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <BrowseComponent />
        },
    ]);



    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default BodyComp;
