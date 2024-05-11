import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
// import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    // const axiosPublic = useAxiosPublic()


    const CreateUserEmailPassword = (email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const SigninWithEmailPassword = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const SigninWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
  
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            // console.log(currentUser)
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[auth])





    const authInfo = {
        user,
        loading,
        CreateUserEmailPassword,
        SigninWithEmailPassword,
        SigninWithGoogle,
        logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;