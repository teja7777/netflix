import { useState } from "react";
import Header from "../Header"

const Login = () => {
    const [toogleSignIn, settoogleSignIn] = useState(true);
    const handleButtonClick = () => {

    }
    return (
        <div className="relative">
            <div>
                <Header />
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt="" />
            </div>
            <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto p-12 bg-black bg-opacity-85 flex flex-col gap-[20px] text-white rounded-xl text-medium">
                <p className="text-3xl font-bold">Sign In</p>
                <input type="text" placeholder="Email Address" className="p-2 rounded-md bg-gray-700" />
                {!toogleSignIn && <input type="text" placeholder="Full Name" className="p-2 rounded-md bg-gray-700" />}
                <input type="password" placeholder="Password" className="p-2 rounded-md bg-gray-700" />
                <button className="bg-red-500 p-2 mt-2 rounded-md" onClick={handleButtonClick}>{toogleSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer hover:underline" onClick={() => { settoogleSignIn(!toogleSignIn) }}>{toogleSignIn ? "New to Netflix? Sign Up Now" : "Already Registered User? Sign In"}</p>
            </form>
        </div>
    )
}

export default Login
