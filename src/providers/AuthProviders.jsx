import { createContext } from "react";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }
    // github login 
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubAuthProvider);
    }

    // reset password 
    const resetPassword = (email) => {
        console.log(email);
        if(!email){
            return;
          }
        return sendPasswordResetEmail(auth, email);
    }
    // logout 
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    } , [])

    const authInfo = {
        user,
        loading, 
        createUser, 
        signIn, 
        logOut,
        signInWithGoogle,
        signInWithGithub,
        resetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;