import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store?.user)
    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            console.log(error);
            // navigate("/error");
        });
    }

    return (
        <div className="absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black w-full">
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                className="w-44"
                alt="logo" />
            {user && <div className="flex items-center gap-3">
                <img src={user.photoURL ? user.photoURL : "/profile.jpg"} className="h-[40px] w-[40px]" />
                <button className="text-xl text-white font-bold" onClick={handleSignout}>Sign out</button>
            </div>}
        </div>
    )
}

export default Header
