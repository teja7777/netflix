import { createBrowserRouter, useNavigate } from "react-router-dom";
import BrowseComponent from "../BrowseComponent";
import Login from "../Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/store/Slices/userSlice";

const BodyComp = () => {
    const dispatch = useDispatch();
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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                const { uid, email } = user;
                dispatch(addUser({ uid: uid, email: email }));
            } else {
                // User is signed out
                dispatch(removeUser())
            }
        });
    }, [])


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default BodyComp;
