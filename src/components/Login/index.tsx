import { useRef, useState } from "react";
import Header from "../Header"
import { checkSignInData, checkSignUpData } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/store/Slices/userSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [toogleSignIn, settoogleSignIn] = useState(true);
    const email = useRef<any>(null);
    const password = useRef<any>(null);
    const name = useRef<any>(null);
    const [errorMessage, setErrorsMessage] = useState("");
    const handleButtonClick = () => {
        const message = toogleSignIn ? checkSignInData(email?.current, password?.current) : checkSignUpData(email?.current, password?.current, name?.current);
        setErrorsMessage(message || "");
        if (message) return;
        if (!toogleSignIn) {
            //Signup Logic
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://avatars.githubusercontent.com/u/52334571?s=400&v=4"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser || {};
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }))
                        navigate("/browse");
                    }).catch((error) => {
                        // An error occurred
                        setErrorsMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error?.code || "";
                    const errorMessage = error.message;
                    setErrorsMessage(errorcode + "-" + errorMessage)
                });
        } else {
            //SignIn logic
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorsMessage(errorCode + "-" + errorMessage);
                });
        }
    }
    const handleToggleButton = () => {
        settoogleSignIn(!toogleSignIn);
    }
    return (
        <div className="relative">
            <div>
                <Header />
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt="" />
            </div>
            <form onSubmit={e => e.preventDefault()} className="maxf-w-[360px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto p-12 bg-black bg-opacity-85 flex flex-col gap-[20px] text-white rounded-xl text-medium">
                <p className="text-3xl font-bold">Sign In</p>
                <input type="text" placeholder="Email Address" className="p-2 rounded-md bg-gray-700" ref={email} />
                {!toogleSignIn && <input type="text" placeholder="Full Name" className="p-2 rounded-md bg-gray-700" ref={name} />}
                <input type="password" placeholder="Password" className="p-2 rounded-md bg-gray-700" ref={password} />
                <p className="text-red-500 font-bold">{errorMessage}</p>
                <button className="bg-red-500 p-2 mt-2 rounded-md" onClick={handleButtonClick}>{toogleSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer hover:underline" onClick={handleToggleButton}>{toogleSignIn ? "New to Netflix? Sign Up Now" : "Already Registered User? Sign In"}</p>
            </form>
        </div>
    )
}

export default Login
