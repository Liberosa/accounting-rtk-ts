import {useState} from "react";
import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";


const Guest = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);
    return (
        <div>
            {isSignedIn ? <SignIn/> :<SignUp/>}
            <button
                onClick={() => setIsSignedIn(prevState =>!prevState)}
            > Switch to{isSignedIn ? 'Sign up' : 'Sign in'}</button>
        </div>
    );
};

export default Guest;